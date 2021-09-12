import {Component} from '@angular/core';

@Component({
    selector : 'success-alert',
    template :'<h1>success-alert works !</h1>',
    styles : ['h1{color:darkCyan}']
})

export class SuccessAlertComponent{
    success  = 'Success Alert Component'
}