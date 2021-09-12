import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from 'app/app.component';
import { every } from 'rxjs/operator/every';
@Component({
  selector: 'app-server-component',
  templateUrl: './app-server-component.component.html',
  styleUrls: ['./app-server-component.component.css']
})
export class AppServerComponentComponent implements OnInit {
  servers = [];
  companyName: string; // Using Data binding - on input event
  investType: string; // using 2-way binding - on ngModel input event
  companyAdditionStatus: string;
  constructor() { }
  ngOnInit() {
     
  }

  enterCompanyname(event: Event){
    //Its a text box for company
    this.companyName = (<HTMLInputElement>event.target).value;
  }

  OnAddInvestment(){
    this.servers.push(this.companyName);
    this.companyAdditionStatus ='Server was created with Server Name ' + this.companyName;
  }
}
