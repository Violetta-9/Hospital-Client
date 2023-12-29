import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { DoctorOneDTO, DoctorService, PatientOneDTO, PatientService } from '../core/services/swagger-gen/profile';
import { EntityDetailsBaseComponent } from '../core/components/abstraction/entity-detail-base.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppointmentService, CreateAppointmentResultDto } from '../core/services/swagger-gen/appointment';
import { AlertService } from '../services/alert-service.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent extends EntityDetailsBaseComponent implements OnInit, OnDestroy {
  public doctor: DoctorOneDTO;
  public patient: PatientOneDTO;
  public serviceTitle: string;
  public specializationTitle: string;
  private appointmentId: number;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly doctorService: DoctorService,
    private readonly patientService: PatientService,
    private readonly appointmentService: AppointmentService,
    private readonly alertService: AlertService,
    private readonly translateService: TranslateService
  ) {
    super()
  }

  ngOnInit(): void {

    this.route.queryParams.pipe(takeUntil(this.unsubscribe)).subscribe(async (params: any) => {
      this.doctorService.getDoctorById(params.doctorId)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(x => {
          this.doctor = x
          this.patientService.getPatientById(params.patientId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(y => {
              this.patient = y


              this.detailsForm = new FormGroup({
                complaints: new FormControl('', [Validators.required]),
                conclusion: new FormControl('', [Validators.required]),
                recomendation: new FormControl('', [Validators.required]),
                appointmentId: new FormControl(+params.appointmentId),
                serviceTitle: new FormControl(params.serviceTitle),
                specializationTitle: new FormControl(params.specializationTitle),
                patientId: new FormControl(+params.patientId),
                doctorFullName: new FormControl(`${x.firstName} ${x.lastName} ${x.middleName}`),
                patientFullName: new FormControl(`${y.firstName} ${y.lastName} ${y.middleName} `),

              });

            });
        });
    });
  }


  protected saveInternal(): any {
    let data = this.detailsForm.getRawValue()
    let result: CreateAppointmentResultDto = {...data}
    this.appointmentService.createAppointmentResult(result).subscribe(async x => {
      if (x.isSuccess) {
        this.alertService.showSuccess(await this.translateService.get('RESPONSE.APPOINTMENT.SUCCESS_RESULT').toPromise())
      } else {
        this.alertService.showError(await this.translateService.get('RESPONSE.APPOINTMENT.BAD_RESULT').toPromise())
      }
    })
  }
}
