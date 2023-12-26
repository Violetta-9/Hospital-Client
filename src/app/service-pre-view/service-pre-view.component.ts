import { Component, OnInit } from '@angular/core';
import { SpecializationListDTO, SpecializationService } from '../core/services/swagger-gen/specialization';

@Component({
  selector: 'app-service-pre-view',
  templateUrl: './service-pre-view.component.html',
  styleUrls: ['./service-pre-view.component.css']
})
export class ServicePreViewComponent implements OnInit {
specialization:SpecializationListDTO[];
  displayedColumns: string[] = ['title','price','category'];
  constructor(private readonly specializationService:SpecializationService) { }

  ngOnInit(): void {
    this.specializationService.getAllSpecialization().subscribe(x=>this.specialization =x );
  }

}
