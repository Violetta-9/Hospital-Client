import { Injectable } from '@angular/core';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class TimeSlotsGeneratorService {

  constructor() { }
  generateTimeSlots(startTime: string, endTime: string, interval: number) {
    let timeSlots = [];
    let currentTime = moment(startTime, 'HH:mm');

    while (currentTime.isBefore(moment(endTime, 'HH:mm'))) {
      timeSlots.push(currentTime.format('HH:mm'));
      currentTime.add(interval, 'minutes');
    }

    return timeSlots;
  }

}
