import { Component, OnInit } from '@angular/core';
import {TimeSlotsGeneratorService} from "../core/services/time-slots-generator.service";


@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {
  timeSlots: Array<string> = [];
  constructor(private timeSlotsGeneratorService: TimeSlotsGeneratorService) {
    this.timeSlots = this.timeSlotsGeneratorService.generateTimeSlots('08:00', '18:00', 30);
  }
  ngOnInit(): void {
  }
}
