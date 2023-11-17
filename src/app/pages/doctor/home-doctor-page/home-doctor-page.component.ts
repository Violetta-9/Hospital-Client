import { Component, OnInit } from '@angular/core';
import {DoctorService, FilterService} from "../../../core/services/swagger-gen/profile";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DeleteConfirmComponent} from "../../../shared/modals/delete-confirm/delete-confirm.component";
import {DeletePersonService} from "../../../core/services/manage-delete/delete-person.service";
import {EntityDetailsBaseComponent} from "../../../core/components/abstraction/entity-detail-base.component";
import {FormBuilder, Validators} from "@angular/forms";
import {FilterBase} from "../../../core/components/abstraction/filter-base";
import {SearchConditionBase, SearchConditionCacheService} from "../../../core/services/search-condition-cache-service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-home-doctor-page',
  templateUrl: './home-doctor-page.component.html',
  styleUrls: ['./home-doctor-page.component.css']
})
export class HomeDoctorPageComponent implements OnInit {
  displayedColumns: string[] = ['fio','specialization', 'status','birthday', 'officeAddress'];
  dataSource;
  public filterChanged$: Subject<void> = new Subject();

  constructor(public doctorService:DoctorService,
              private router: Router,
              private route: ActivatedRoute,
              private filterService:FilterService,
              private searchService:SearchConditionCacheService<SearchConditionBase>
            ) {

  }
  localStorageKey="DOCTOR_FILTER"
  ngOnInit(): void {
    this.filterChanged$.asObservable().subscribe(x=>{

    let template=this.searchService.getFilter(this.localStorageKey)
      this.filterService.doctorFilter(template.fullName.firstName,template.fullName.lastName,template.fullName.middleName,template.specializationId,template.officeId).subscribe(x=>this.dataSource=x)
    })
    this.getAllDoctors();

  }


  private getAllDoctors() {
    this.doctorService.getAllDoctors().subscribe(x=>this.dataSource=x)
  }

  linkTo(row) {

    this.router.navigate(['../../doctor/profile'], { relativeTo:this.route, queryParams: { id: row.id } });

  }


  createDoctor() {
    this.router.navigate(['../../doctor/create'], { relativeTo:this.route});
  }



}
