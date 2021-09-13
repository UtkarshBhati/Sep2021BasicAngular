import {Component} from '@angular/core';

@Component({
    selector : 'success-alert',
    //template :'<h1>success-alert works !</h1>',
    templateUrl: './sucess-alert.component.html',
    //styles : ['h1{color:darkCyan}']
    styleUrls: ['./sucess-alert.component.css']
})

export class SuccessAlertComponent{
    name = 'Success Alert Name ';
    success  = 'Success Alert Component'
}