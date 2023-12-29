import { Component, OnInit } from '@angular/core';
import {ReceptionistService} from "../../../core/services/swagger-gen/profile";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-home-receptionist-page',
  templateUrl: './home-receptionist-page.component.html',
  styleUrls: ['./home-receptionist-page.component.css']
})
export class HomeReceptionistPageComponent implements OnInit {
  displayedColumns: string[] = ['fio', 'officeAddress'];
  dataSource;
  constructor(public receptionistService:ReceptionistService,
              private router: Router,
              private route: ActivatedRoute,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllReceptionist();
  }

  private getAllReceptionist() {
    this.receptionistService.getAllReceptionists().subscribe(x=>this.dataSource=x)
  }


    linkTo(row) {
      this.router.navigate(['../../receptionist/profile'], { relativeTo:this.route ,queryParams: { id: row.id }});
    }


  createReceptionist() {
    this.router.navigate(['../../receptionist/create'], { relativeTo:this.route });
  }
}
