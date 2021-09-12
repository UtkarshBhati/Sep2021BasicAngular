import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Root Default Component !';
  allowUserNameClearAccess = false;
  @ViewChild('serverName')
  serverName:String;
  notEmpty = false;
  success ='Server Created';
  name = 'Warning Name';
  allowButtonAdd: boolean = true;
  onUpdateEvent(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }

  serverElement = [{type:'server',name:'TestServer', content:'Just a Test'}];
	
	onServerAdded(serverData : {sname:string, scont:string}){
		this.serverElement.push({
			type:'server',
			name:serverData.sname,
			content:serverData.scont
		 });
		}
    onServerAdded2(){
      this.serverElement.push();
    }
    checkIfNumber(){
      return true;
    }
    onUpdateServerName(event: any){
      this.serverName = (<HTMLInputElement>event.target).value;
    }
    constructor() {
     setTimeout(()=>{
        this.allowButtonAdd = false
      } , 2000)
    }
}
