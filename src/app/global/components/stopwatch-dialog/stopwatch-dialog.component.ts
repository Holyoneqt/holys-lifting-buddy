import { ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Subscription } from 'rxjs';

import { StopwatchService } from './../../../services/stopwatch.service';

@Component({
    selector: 'app-stopwatch-dialog',
    templateUrl: 'stopwatch-dialog.component.html',
    styleUrls: ['stopwatch-dialog.component.css'],
})
export class StopwatchDialogComponent implements OnInit, OnDestroy {

    public time: number;
    public percentage: number;

    private stopwatchSub: Subscription;
    private isTickingSub: Subscription;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private stopwatch: StopwatchService, private changeDetector: ChangeDetectorRef,
        private matDialogRef: MatDialogRef<StopwatchDialogComponent>) {
    }

    public ngOnInit(): void {
        this.stopwatchSub = this.stopwatch.stopwatch$.subscribe(timer => {
            this.percentage = (timer * 100) / this.stopwatch.timeToWait;
            this.time = timer;
            this.changeDetector.detectChanges();
        });

        this.isTickingSub = this.stopwatch.isTicking$.subscribe(isTicking => {
            if (!isTicking) {
                this.matDialogRef.close();
            }
        });
    }

    public ngOnDestroy(): void {
        this.stopwatchSub.unsubscribe();
        this.isTickingSub.unsubscribe();
    }

    public addSeconds(amount: number): void {
        this.stopwatch.timeToWait += amount;
    }

}
