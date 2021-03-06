import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { AmrapRepsDialogComponent } from 'src/app/global/components/amrap-reps-dialog/amrap-reps-dialog.component';
import { DAYS } from 'src/app/global/static/constants';
import { TrainingDay, TrainingDayBlock } from 'src/app/models/template.model';
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

    public selectedTab: number;

    public week: TrainingWeek;

    constructor(private data: DataService, private router: Router, private matDialog: MatDialog, private stopwatch: StopwatchService,
        private changeDetector: ChangeDetectorRef) { }

    public ngOnInit(): void {
        const paramterWeek = this.data.getRoutingParameter<TrainingWeek>();
        if (!paramterWeek || !paramterWeek.template) {
            this.router.navigate(['home']);
        } else {
            this.week = paramterWeek;
        }

        this.selectedTab = new Date().getDay() - 1;
    }

    public isDone(dayIndex: number, blockIndex: number, setIndex: number): boolean {
        return this.week.template.days[dayIndex].blocks[blockIndex].sets[setIndex].done;
    }

    public isFailed(dayIndex: number, blockIndex: number, setIndex: number): boolean {
        return this.week.template.days[dayIndex].blocks[blockIndex].sets[setIndex].failed;
    }

    public setDone(dayIndex: number, blockIndex: number, setIndex: number): void {
        const set = this.week.template.days[dayIndex].blocks[blockIndex].sets[setIndex];

        if (!set.done || set.failed) {
            if (set.amrap) {
                const ref = this.openAmrapSetsDialog();
                ref.afterClosed().subscribe(value => {
                    set.amrapReps = value;
                    this.stopwatch.startStopwatch();
                    this.openStopwatchDialog();
                    this.toggleSetDone(dayIndex, blockIndex, setIndex);
                });
            } else {
                if (!set.failed) {
                    this.stopwatch.startStopwatch();
                    this.openStopwatchDialog();
                }
                this.toggleSetDone(dayIndex, blockIndex, setIndex);
            }
        } else {
            set.amrapReps = undefined;
            this.toggleSetDone(dayIndex, blockIndex, setIndex);
        }
    }

    private toggleSetDone(dayIndex: number, blockIndex: number, setIndex: number): void {
        const set = this.week.template.days[dayIndex].blocks[blockIndex].sets[setIndex];
        if (set.failed) {
            set.failed = false;
        } else {
            set.done = !set.done;
        }
        this.week.template.days[dayIndex].blocks[blockIndex].sets[setIndex] = set;
        this.data.updateWeek(this.week);

        this.changeDetector.detectChanges();
    }

    private toggleSetFailed(dayIndex: number, blockIndex: number, setIndex: number): void {
        const set = this.week.template.days[dayIndex].blocks[blockIndex].sets[setIndex];
        set.failed = !set.failed;
        this.week.template.days[dayIndex].blocks[blockIndex].sets[setIndex] = set;
        this.data.updateWeek(this.week);

        this.changeDetector.detectChanges();
    }

    public calculatePercentage(exercise: Exercise, set: Set): number {
        return Math.round((((set.weightPercentage * exercise.weekMax) / 100) / 2.5)) * 2.5;
    }

    public dayCompletedIcon(day: TrainingDay): string {
        let icon = 'done';
        day.blocks.forEach(block => {
            block.sets.forEach(set => {
                if (set.failed) {
                    icon = 'remove';
                } else if (!set.done) {
                    icon = undefined;
                }
            });
        });
        return icon;
    }

    public blockCompleteIcon(block: TrainingDayBlock): string {
        let icon = 'done';
        block.sets.forEach(set => {
            if (set.failed) {
                icon = 'remove';
            } else if (!set.done) {
                icon = undefined;
            }
        });
        return icon;
    }

    public deleteWeek(): void {
        this.data.deleteWeek(this.week);
        this.router.navigate(['home']);
    }

    public onSwipeLeft(dayIndex: number, blockIndex: number, setIndex: number) {
        const set = this.week.template.days[dayIndex].blocks[blockIndex].sets[setIndex];

        if (!set.failed) {
            if (set.amrap) {
                const ref = this.openAmrapSetsDialog();
                ref.afterClosed().subscribe(value => {
                    set.amrapReps = value;
                    this.stopwatch.startStopwatch();
                    this.openStopwatchDialog();
                    this.toggleSetFailed(dayIndex, blockIndex, setIndex);
                });
            } else {
                this.stopwatch.startStopwatch();
                this.openStopwatchDialog();
                this.toggleSetFailed(dayIndex, blockIndex, setIndex);
            }
        } else {
            set.amrapReps = undefined;
            this.toggleSetFailed(dayIndex, blockIndex, setIndex);
        }
    }

    public openStopwatchDialog(): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.height = '70vh';
        dialogConfig.width = '90vw';
        this.matDialog.open(StopwatchDialogComponent, dialogConfig);
    }

    private openAmrapSetsDialog(): MatDialogRef<AmrapRepsDialogComponent> {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.height = '25vh';
        dialogConfig.width = '60vw';
        return this.matDialog.open(AmrapRepsDialogComponent, dialogConfig);
    }

}
