import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
name = 'Warning Alert Component !';
username  = 'User Warning';
  constructor() { }

  ngOnInit() {
  }

}
