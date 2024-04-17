import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';

@Component({
    selector: 'courses-card-list',
    templateUrl: './courses-card-list.component.html',
    styleUrls: ['./courses-card-list.component.css'],
})
export class CoursesCardListComponent implements OnInit {

    @Input() public courses: Course[];

    constructor(private dialog: MatDialog) { }

    public ngOnInit(): void {

    }

    public editCourse({ description, longDescription, category }: Course): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = { description, longDescription, category };
        const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(
            val => console.log('Dialog output:', val)
        );
    }
}
