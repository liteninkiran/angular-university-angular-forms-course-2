import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

    public val = {
        email: 'hello@gmail.com',
        password: '132456',
    }

    constructor() { }

    public ngOnInit(): void {

    }

    public login(form: NgForm, event): void {
        console.log('Val', this.val);
    }
}
