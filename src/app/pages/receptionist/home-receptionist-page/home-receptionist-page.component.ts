import { Component, OnInit } from '@angular/core';
import {ReceptionistService} from "../../../core/services/swagger-gen/profile";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-receptionist-page',
  templateUrl: './home-receptionist-page.component.html',
  styleUrls: ['./home-receptionist-page.component.css']
})
export class HomeReceptionistPageComponent implements OnInit {
  displayedColumns: string[] = ['fio', 'officeAddress'];
  dataSource;
  constructor(public receptionistService:ReceptionistService,private router: Router) { }

  ngOnInit(): void {
    this.getAllReceptionist();
  }

  private getAllReceptionist() {
    this.receptionistService.getAllReceptionists().subscribe(x=>this.dataSource=x)
  }


    linkTo(row) {

      this.router.navigate(['receptionist/profile'], { queryParams: { id: row.id } });

      console.log(row)
      console.log(row.id)
    }

}
