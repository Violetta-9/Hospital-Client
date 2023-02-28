import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../../core/services/swagger-gen/service";
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-home-services-page',
  templateUrl: './home-services-page.component.html',
  styleUrls: ['./home-services-page.component.css']
})
export class HomeServicesPageComponent implements OnInit {
  displayedColumns: string[] = ['title','price', 'isActive','serviceCategoryName'];
  dataSource;
  constructor(public serviceService:ServiceService,private router: Router) {
    this.getAllService();
  }

  ngOnInit(): void {

  }

  private getAllService() {
    this.serviceService.getAllServices().subscribe(x=>this.dataSource=x);
  }
  linkTo(row) {

    this.router.navigate(['/service'], { queryParams: { id: row.id } });

    console.log(row)
    console.log(row.id)
  }
}
