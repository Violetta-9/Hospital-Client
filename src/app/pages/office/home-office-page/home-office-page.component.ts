import { Component, OnInit } from '@angular/core';
import {OfficeService} from "../../../core/services/swagger-gen/office";
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-home-office-page',
  templateUrl: './home-office-page.component.html',
  styleUrls: ['./home-office-page.component.css']
})
export class HomeOfficePageComponent implements OnInit {
  displayedColumns: string[] = ['address', 'status', 'registryNumber'];
  dataSource;
  constructor(public officeService:OfficeService, private router: Router)
  {

  }

  ngOnInit(): void {
    this.getAllOffices();

  }

  private getAllOffices() {
    this.officeService.getAllOffices().subscribe(x=>{
      this.dataSource=x
    })
  }

  linkTo(row) {
    let r = "office";

    const navigationExtras: NavigationExtras = {
      state: {
        data: row
      }
    };
    this.router.navigate([r], navigationExtras);
    console.log(row)
    console.log(row.id)
   // this.router.navigate([r], { queryParams: { id: row } });
  }
}
