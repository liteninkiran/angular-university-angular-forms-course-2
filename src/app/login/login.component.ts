import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

    constructor() { }

    public ngOnInit(): void {

    }

    public login(form: NgForm, event): void {
 
    }
}
