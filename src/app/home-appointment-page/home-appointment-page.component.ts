import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../core/services/swagger-gen/appointment';
import { ReceptionistService } from '../core/services/swagger-gen/profile';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-appointment-page',
  templateUrl: './home-appointment-page.component.html',
  styleUrls: ['./home-appointment-page.component.css']
})
export class HomeAppointmentPageComponent implements OnInit {
  displayedColumns: string[] = ['doctor', 'patient', 'patientPhoneNumber', 'specialization', 'service', 'date', 'action'];
  dataSource;
  officeId: number;
  role: string = '';
  constructor(private readonly appointmentService: AppointmentService,
              private readonly  receptionistService: ReceptionistService,
              private readonly router: Router) { }

  ngOnInit(): void {
    this.getAllAppointmentByCurrentDateAndOffice();
  }

  private getAllAppointmentByCurrentDateAndOffice(){
    const roles = localStorage.getItem('role');
    let id = localStorage.getItem('id');
    let date = new Date();
    date.setHours(0, 0, 0, 0);
    if (roles) {
      const rolesArray = roles.split(',');
      if(rolesArray.includes('Receptionist')){
        this.role = 'Receptionist'
        this.receptionistService.getReceptionistById(+id).subscribe(x=>{
          this.officeId = x.officeId;
          this.appointmentService.getAppointmentListForReceptionist(x.officeId,date).subscribe(x=>this.dataSource = x);
        })
      }
      if(rolesArray.includes('Doctor')){
        this.role = 'Doctor'
        this.appointmentService.getAppointmentListForDoctor(+id,date).subscribe(x=>this.dataSource = x);
      }
    }

  }

  newDate(value: unknown) {
    const roles = localStorage.getItem('role');
    let id = localStorage.getItem('id');
    let dateObject = new Date(value as string);
    if (roles) {
      const rolesArray = roles.split(',');
      if(rolesArray.includes('Receptionist')){
        if(this.officeId){
          this.appointmentService.getAppointmentListForReceptionist(this.officeId,dateObject).subscribe(x=>this.dataSource = x);
        }
        else {
          this.receptionistService.getReceptionistById(+id).subscribe(x=>{
            this.appointmentService.getAppointmentListForReceptionist(x.officeId,dateObject).subscribe(x=>this.dataSource = x);
          })
        }
      }
      if(rolesArray.includes('Doctor')){
        this.appointmentService.getAppointmentListForDoctor(+id,dateObject).subscribe(x=>this.dataSource = x);
      }
    }

  }

  approveAppointment(element, $event: MatSlideToggleChange) {
      this.appointmentService.approveAppointmentForm(element.appointmentId,$event.checked).subscribe(x=>console.log(x))
  }

  goToResult(element: any) {
    let doctorId = localStorage.getItem('id');
    let queryParams = {
      patientId: element.patientId,
      doctorId: doctorId,
      appointmentId: element.appointmentId,
      serviceTitle: element.serviceName,
      specializationTitle: element.specializationName,
    };
     this.router.navigate(['management/page/result'], {queryParams: queryParams});
  }

  public getPath(element:any) {

   return `/management/patient/profile?id=${element.patientId}`
  }
}
