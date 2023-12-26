import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  steps = [
    'Register on our website or visit the clinic to complete the registration process.',
    'Log in to your account and navigate to the "Meetings" menu.',
    'Follow the instructions provided and submit a meeting request.',
    'Wait for the approval of your meeting request.',
    'Keep track of your meeting results and upcoming meetings in your user profile.'
  ];

}
