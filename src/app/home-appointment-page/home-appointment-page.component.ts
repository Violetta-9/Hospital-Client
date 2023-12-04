import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../core/services/swagger-gen/appointment';
import { ReceptionistService } from '../core/services/swagger-gen/profile';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-home-appointment-page',
  templateUrl: './home-appointment-page.component.html',
  styleUrls: ['./home-appointment-page.component.css']
})
export class HomeAppointmentPageComponent implements OnInit {
  displayedColumns: string[] = ['doctor', 'patient', 'patientPhoneNumber', 'specialization', 'service', 'date', 'action'];
  dataSource;
  officeId: number;
  constructor(private readonly appointmentService: AppointmentService,
              private readonly  receptionistService: ReceptionistService) { }

  ngOnInit(): void {
    this.getAllAppointmentByCurrentDateAndOffice();
  }

  private getAllAppointmentByCurrentDateAndOffice(){
    let date = new Date();
    date.setHours(0, 0, 0, 0);
    let receptionistId = localStorage.getItem('id');
    this.receptionistService.getReceptionistById(+receptionistId).subscribe(x=>{
      this.officeId = x.officeId;
      this.appointmentService.getAppointmentListForReceptionist(x.officeId,date).subscribe(x=>this.dataSource = x);
    })

  }

  newDate(value: unknown) {
    let dateObject = new Date(value as string);
    if(this.officeId){
      this.appointmentService.getAppointmentListForReceptionist(this.officeId,dateObject).subscribe(x=>this.dataSource = x);
    }
    else {
      let receptionistId = localStorage.getItem('id');
      this.receptionistService.getReceptionistById(+receptionistId).subscribe(x=>{
        this.appointmentService.getAppointmentListForReceptionist(x.officeId,dateObject).subscribe(x=>this.dataSource = x);
      })
    }
  }

  approveAppointment(element, $event: MatSlideToggleChange) {
      this.appointmentService.approveAppointmentForm(element.appointmentId,$event.checked).subscribe(x=>console.log(x))
  }
}
