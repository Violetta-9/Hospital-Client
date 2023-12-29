import { Component, OnInit } from '@angular/core';
import {SpecializationService} from "../../../core/services/swagger-gen/specialization";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home-specialization-page',
  templateUrl: './home-specialization-page.component.html',
  styleUrls: ['./home-specialization-page.component.css']
})
export class HomeSpecializationPageComponent implements OnInit {
  displayedColumns: string[] = ['specializationTitle', 'status'];
  dataSource;

  constructor(public specializationService:SpecializationService,
              private router: Router,
              private route: ActivatedRoute) {
    this.getAllSpecialization();
  }

  ngOnInit(): void {

  }

  getAllSpecialization(){
    this.specializationService.getAllSpecialization().subscribe(x=>
      this.dataSource=x
    );
  }

  linkTo(row) {
    this.router.navigate(['specialization'], { queryParams: { id: row.id } })
  }

  createSpecialization() {
    this.router.navigate(['../../specialization/create'], {relativeTo:this.route});
  }
}
