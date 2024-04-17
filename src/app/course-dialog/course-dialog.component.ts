import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from '../model/course';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
    selector: 'course-dialog',
    templateUrl: './course-dialog.component.html',
    styleUrls: ['./course-dialog.component.css'],
})
export class CourseDialogComponent implements OnInit {
    public form: FormGroup;
    public description: string;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<CourseDialogComponent>,
        @Inject(MAT_DIALOG_DATA) { description, longDescription, category }: Course
    ) {
        this.description = description;
        this.form = fb.group({
            description: [description, Validators.required],
            category: [category, Validators.required],
            releasedAt: [new Date(), Validators.required],
            longDescription: [longDescription, Validators.required],
        });
    }

    public ngOnInit(): void {

    }

    public save(): void {
        this.dialogRef.close(this.form.value);
    }

    public close(): void {
        this.dialogRef.close();
    }
}
