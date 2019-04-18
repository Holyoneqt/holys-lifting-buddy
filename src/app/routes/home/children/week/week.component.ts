import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import { DAYS } from 'src/app/global/static/constants';
import { TrainingDay } from 'src/app/models/template.model';
import { TrainingWeek } from 'src/app/models/week.model';
import { StopwatchService } from 'src/app/services/stopwatch.service';

import { StopwatchDialogComponent } from './../../../../global/components/stopwatch-dialog/stopwatch-dialog.component';
import { EXERCISE_GROUPS } from './../../../../global/static/exercise-data';
import { Exercise, Set } from './../../../../models/exercise.model';
import { DataService } from './../../../../services/data.service';

@Component({
    selector: 'app-week',
    templateUrl: 'week.component.html',
    styleUrls: ['week.component.css']
})
export class WeekComponent implements OnInit {
    
    public readonly EXERCISE_GROUPS = EXERCISE_GROUPS;
    public readonly DAY_NAMES = DAYS;

    public week: TrainingWeek;

    constructor(private data: DataService, private router: Router, private matDialog: MatDialog, private stopwatch: StopwatchService) { }

    public ngOnInit(): void {
        const paramterWeek = this.data.getRoutingParameter<TrainingWeek>();
        if (!paramterWeek) {
            this.router.navigate(['home']);
        } else {
            this.week = paramterWeek;
        }
    }

    public isDone(dayIndex: number, blockIndex: number, setIndex: number): boolean {
        return this.week.template.days[dayIndex].blocks[blockIndex].sets[setIndex].done;
    }

    public setDone(dayIndex: number, blockIndex: number, setIndex: number): void {
        const set = this.week.template.days[dayIndex].blocks[blockIndex].sets[setIndex];
        if (!set.done) {
            this.stopwatch.startStopwatch();
            this.openStopwatchDialog();
        }
        
        set.done = !set.done;
        this.week.template.days[dayIndex].blocks[blockIndex].sets[setIndex] = set;
        this.data.updateWeek(this.week);
    }

    public calculatePercentage(exercise: Exercise, set: Set): number {
        return Math.round((((set.weightPercentage * exercise.weekMax) / 100) / 2.5)) * 2.5;
    }

    public dayIsComplete(day: TrainingDay): boolean {
        let complete = true;
        day.blocks.forEach(block => {
            block.sets.forEach(set => {
                if (!set.done) {
                    complete = false;
                }
            });
        });
        return complete;
    }
    
    public openStopwatchDialog(): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.height = '60vh';
        dialogConfig.width = '90vw';
        this.matDialog.open(StopwatchDialogComponent, dialogConfig);
    }

}
