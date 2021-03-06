import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { DAYS } from 'src/app/global/static/constants';
import { EXERCISE_GROUPS } from 'src/app/global/static/exercise-data';
import { Global } from 'src/app/global/util/util';
import { ExerciseType } from 'src/app/models/exercise.model';
import { Template, TrainingDay, TrainingDayBlock } from 'src/app/models/template.model';
import { DataService } from 'src/app/services/data.service';

import { SetsDialogComponent } from '../../components/sets-dialog/sets-dialog.component';

@Component({
    selector: 'app-edit-template',
    templateUrl: 'edit-template.component.html',
    styleUrls: ['edit-template.component.css']
})

export class EditTemplateComponent implements OnInit {

    public readonly EXERCISE_GROUPS = EXERCISE_GROUPS;
    public readonly DAY_NAMES = DAYS;

    public editType: 'New' | 'Edit';

    public template: Template;

    constructor(private data: DataService, private router: Router, private route: ActivatedRoute, private matDialog: MatDialog) { }

    ngOnInit() {
        const paramterTemplate = this.data.getRoutingParameter<Template>();
        if (paramterTemplate && paramterTemplate.days) {
            this.editType = 'Edit';
            this.template = paramterTemplate;
        } else {
            this.editType = 'New';
            this.template = {
                name: '',
                inUse: false,
                days: Array.from({ length: 7 }, (_, index) => {
                    return {
                        index: index,
                        blocks: [],
                    } as TrainingDay;
                })
            };
        }

    }

    public cancel(): void {
        this.router.navigate(['template/overview']);
    }

    public saveTemplate(): void {
        this.data.addOrUpdateTemplate(this.template);
        this.router.navigate(['template/overview']);
    }

    public addExercise(dayIndex: number, type: ExerciseType): void {
        this.template.days[dayIndex].blocks.push({
            exercise: { name: '', type: type },
            sets: []
        });
    }

    public filterExerciseType(trainingDay: TrainingDay, type: ExerciseType): TrainingDayBlock[] {
        return trainingDay.blocks.filter(block => block.exercise.type === type);
    }

    public disableInUse(): boolean {
        if (this.template.inUse) {
            return false;
        } else {
            return Global.Util.templateInUseSelected(this.data.getData());
        }
    }

    public openSetsDialog(block: TrainingDayBlock): void {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.height = '90vh';
        dialogConfig.width = '90vw';
        dialogConfig.data = { trainingBlock: block };

        const dialogRef = this.matDialog.open(SetsDialogComponent, dialogConfig);
    }

}
