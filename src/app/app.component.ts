import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { StopwatchDialogComponent } from './global/components/stopwatch-dialog/stopwatch-dialog.component';
import { DataService } from './services/data.service';
import { StopwatchService } from './services/stopwatch.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(public data: DataService, public stopwatch: StopwatchService, private matDialog: MatDialog) { }

    public openStopwatchDialog(): void {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.height = '70vh';
        dialogConfig.width = '90vw';

        const dialogRef = this.matDialog.open(StopwatchDialogComponent, dialogConfig);
    }

}
