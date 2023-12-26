import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { EntityDetailsBaseComponent } from "../../../core/components/abstraction/entity-detail-base.component";
import { emailValidators } from "../../../shared/validators/emailValidator";
import {
  DoctorService, IAppointmentForPatientDto, IResultDto,
  IResultForPatient,
  IServiceForPatientResultDto,
  StatusService
} from "../../../core/services/swagger-gen/profile";
import { MatSelectChange } from "@angular/material/select";
import { AddImageToAvatarService } from "../../../core/services/manage-photo/add-image-to-avatar.service";
import { MatDialog } from "@angular/material/dialog";
import { DeleteConfirmComponent } from "../../../shared/modals/delete-confirm/delete-confirm.component";
import { DeletePersonService } from "../../../core/services/manage-delete/delete-person.service";
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource } from '@angular/material/tree';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { AppointmentService } from '../../../core/services/swagger-gen/appointment';
import { RescheduleAppointmenDialog } from '../../../reschedule-appointment/reschedule-appointment.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent extends EntityDetailsBaseComponent implements OnInit {
  public statusGroup: FormGroup = new FormGroup({});
  public statuses;
  @Input() userRole;
  @Input() profileUser;
  @Output() dataForPersonalUpdating = new EventEmitter();
  @Output() dataForWorkUpdating = new EventEmitter();
  @Output() doctorStatus = new EventEmitter();
  public newPhoto;
  panelOpenState = false;
  displayedColumns: string[] = ['doctor', 'date', 'service', 'action'];
  dataSourceTable;

  private _transformer = (node: any, level: number) => {
    let name;
    if (node.doctorFullName != undefined) {
      name = `${node.doctorFullName} ${node.date}`
    } else if (node.absoluteUrl != undefined) {
      name = `<a class="text-primary" style="cursor: pointer;" href="${node.absoluteUrl}" >${node.fileTitle}<a/>`
    } else {
      name = node.title
    }
    return {
      expandable: !!node.children && node.children.length > 0,
      name: name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;


  constructor(public statusService: StatusService,
              public doctorService: DoctorService,
              public addImageToAvatar: AddImageToAvatarService,
              public dialog: MatDialog,
              public deletePersonService: DeletePersonService, private readonly appointmentService: AppointmentService) {
    super();

    this.getStatuses();
  }

  ngOnInit(): void {
    this.addImageToAvatar.addImageTrigger.subscribe(x => this.newPhoto = x)
    this.addImageToAvatar.deleteImageTrigger.subscribe(x => this.newPhoto = x)
    if (this.userRole == 'patient') {
      this.dataSource.data = this.profileUser?.results;
      this.appointmentService.getAppointmentListForPatient(+localStorage.getItem('id')).subscribe(x => this.dataSourceTable = x);
    }
    this._createForm();


  }

  _createForm() {
    this.statusGroup = new FormGroup({
      status: new FormControl(this.profileUser.statusTitle)
    });


  }

  protected saveInternal(): any {
  }

  updatePersonalData($event: any) {
    this.dataForPersonalUpdating.emit($event);
  }

  updateWorkData($event: any) {
    this.dataForWorkUpdating.emit($event);
  }

  private getStatuses() {

    this.statusService.getAllStatus().subscribe(x => {
      if (this.profileUser.statusTitle) {
        let defValue = x.find(s => s.title.toLowerCase() == this.profileUser.statusTitle?.toLowerCase()).id;
        this.statuses = x;
        this.statusGroup.get('status').setValue(defValue);
      }


    })
  }

  onSelect($event: MatSelectChange) {
    this.doctorStatus.emit($event.value);

  }

  deletePerson(element: any) {
    const dialogRef = this.dialog.open(DeleteConfirmComponent, {
      data: {element},
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.deletePersonService.DeletePerson(result);
      }

    });

  }

  rescheduleAppointment(element) {
    this.doctorService.getDoctorsBySpecializationId(element.specializationId)
      .subscribe(doctors => {
        this.dialog.open(RescheduleAppointmenDialog, {
          data: {
            doctors: doctors,
            appointmentId: element.appointmentId,
            patientId: +localStorage.getItem('id')
          }
        }).afterClosed().subscribe(result => {
         this.dataSourceTable = [...result];

        });
      });
  }
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
