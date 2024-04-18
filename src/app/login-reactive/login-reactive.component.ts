import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { createPasswordStrengthValidator } from '../validators/password-strength.validator';

@Component({
    selector: 'login',
    templateUrl: './login-reactive.component.html',
    styleUrls: ['./login-reactive.component.css'],
})
export class LoginReactiveComponent implements OnInit {

    public form = this.fb.group({
        email: ['', {
            validators: [
                Validators.required,
                Validators.email,
            ],
            updateOn: 'blur',
        }],
        password: ['', [
            Validators.required,
            Validators.minLength(8),
            createPasswordStrengthValidator(),
        ]],
    });

    constructor(
        private fb: NonNullableFormBuilder,
    ) {

    }

    public ngOnInit(): void {

    }

    public login(): void {

    }

    public reset(): void {
        this.form.reset();
    }
}
