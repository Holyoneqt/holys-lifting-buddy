import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TrainingDayBlock } from 'src/app/models/template.model';

@Component({
    selector: 'app-sets-dialog',
    templateUrl: 'sets-dialog.component.html',
    styleUrls: ['sets-dialog.component.css'],
})
export class SetsDialogComponent implements OnInit {

    public trainingBlock: TrainingDayBlock;
    public formInvalid = false;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
        private matDialogRef: MatDialogRef<SetsDialogComponent>) {
    }

    public ngOnInit(): void {
        this.trainingBlock = this.data.trainingBlock;
    }

    public addSet(): void {
        this.trainingBlock.sets.push({
            reps: undefined,
            weightPercentage: undefined,
        });
    }

    public deleteSet(index: number): void {
        this.trainingBlock.sets.splice(index, 1);
    }

    public save(valid: boolean): void {
        if (valid) {
            this.matDialogRef.close(this.trainingBlock);
        } else {
            this.formInvalid = true;
        }
    }

}
