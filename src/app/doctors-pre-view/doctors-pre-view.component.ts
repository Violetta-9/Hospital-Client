import { Component, OnInit } from '@angular/core';
import { DoctorAllDTO, DoctorService } from '../core/services/swagger-gen/profile';

@Component({
  selector: 'app-doctors-pre-view',
  templateUrl: './doctors-pre-view.component.html',
  styleUrls: ['./doctors-pre-view.component.css']
})
export class DoctorsPreViewComponent implements OnInit {
doctors:DoctorAllDTO[];
  constructor(private readonly doctorService:DoctorService) { }

  ngOnInit(): void {
    this.doctorService.getAllDoctors().subscribe(x=>this.doctors =x);
  }

}
