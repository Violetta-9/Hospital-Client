import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EntityDetailsBaseComponent } from '../core/components/abstraction/entity-detail-base.component';
import { DoctorAllDTO } from '../core/services/swagger-gen/profile';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TimeSlotsGeneratorService } from '../core/services/time-slots-generator.service';
import { AppointmentService } from '../core/services/swagger-gen/appointment';

@Component({
  selector: 'app-reschedule-appointment',
  templateUrl: './reschedule-appointment.component.html',
  styleUrls: ['./reschedule-appointment.component.css']
})
export class RescheduleAppointmenDialog extends EntityDetailsBaseComponent implements OnInit {
  originalTimeSlots;
  timeSlots;
  constructor( public dialogRef: MatDialogRef<RescheduleAppointmenDialog>,
               @Inject(MAT_DIALOG_DATA) public data: {doctors: DoctorAllDTO[], appointmentId:number, patientId: number},
               private timeSlotsGeneratorService: TimeSlotsGeneratorService,
               private readonly appointmentService: AppointmentService,
               ) {
    super()
    this.originalTimeSlots = this.timeSlotsGeneratorService.generateTimeSlots('08:00', '18:00', 60);
    this.timeSlots = this.originalTimeSlots;
    this.detailsForm = new FormGroup({
      appointmentId: new FormControl(this.data.appointmentId),
      patientId: new FormControl(this.data.patientId),
      doctorId: new FormControl('', [Validators.required]), // пример валидации
      date: new FormControl('', [Validators.required]),
      time: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  protected saveInternal(): any {

    const formData = this.detailsForm.value;

    const dateString = formData.date;
    const timeString = formData.time;
    let dateObject = new Date(dateString);

    const [hours, minutes] = timeString.split(':');
    dateObject = new Date(dateObject.setHours(Number(hours), Number(minutes)));

    this.appointmentService.rescheduleAppointmentForm(formData.appointmentId,formData.patientId,formData.doctorId,dateObject).subscribe(x=>{
      if(x.length>0){
        this.dialogRef.close(x);
      }
    })
  }

  updateTimeSlots(event:any) {
    this.appointmentService.getBusyTimeSlot(this.detailsForm.get("doctorId").value, new Date(event.value)).subscribe(x=>{
      let stringTime =  x.map<any>(y=>{
        let date = new Date(y.datesTime);
        return {hours:`${date.getHours()}`, duration: y.duration}
      })
      this.timeSlots = this.originalTimeSlots.filter(timeSlot => {

        return !stringTime.some(busySlot => {
          if(busySlot.duration > 1){
            stringTime.push({hours: `${+busySlot.hours + 1}`,duration: 1})
          }
          return  timeSlot.split(":")[0] === busySlot.hours});
      });
    })

  }
}
