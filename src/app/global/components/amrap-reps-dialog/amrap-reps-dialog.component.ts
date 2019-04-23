import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-amrap-reps-dialog',
    templateUrl: 'amrap-reps-dialog.component.html',
    styleUrls: ['amrap-reps-dialog.component.css'],
})
export class AmrapRepsDialogComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private changeDetector: ChangeDetectorRef,
        private matDialogRef: MatDialogRef<AmrapRepsDialogComponent>) {
    }

    public ngOnInit(): void {
    }

    public save(val: number): void {
        this.matDialogRef.close(val);
    }

}
