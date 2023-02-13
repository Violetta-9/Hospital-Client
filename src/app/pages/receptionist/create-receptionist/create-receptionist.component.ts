import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-receptionist',
  templateUrl: './create-receptionist.component.html',
  styleUrls: ['./create-receptionist.component.css']
})
export class CreateReceptionistComponent implements OnInit {
public userRole='receptionist'
  constructor() { }

  ngOnInit(): void {
  }

}
