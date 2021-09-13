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
  investTypes = [];
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
 
  // enterInvestType(event : Event){
  //   this.investType = (<HTMLInputElement>event.target).value;
  // }

  onAddInvestType(){
    this.companyAdditionStatus ='Investment Type ' + this.investType;
    this.investTypes.push(this.investType);
  }
  OnAddInvestment(){
    this.servers.push(this.companyName);
    this.companyAdditionStatus ='Company was created with  Name ' + this.companyName;
  }
}
