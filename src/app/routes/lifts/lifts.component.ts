import { Component, OnInit } from '@angular/core';
import { EXERCISE_GROUPS, ExerciseGroupData } from 'src/app/global/static/exercise-data';
import { Global } from 'src/app/global/util/util';
import { Template } from 'src/app/models/template.model';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-lifts',
    templateUrl: 'lifts.component.html',
    styleUrls: ['lifts.component.css']
})
export class LiftsComponent implements OnInit {
    
    private templateInUse: Template;

    public exercisesGroups = EXERCISE_GROUPS;

    public rawLiftingValues;
    
    constructor(private data: DataService) { }

    public ngOnInit(): void {
        if (this.isTemplateInUse()) {
            this.templateInUse = this.data.getData().templates.find(t => t.inUse);
        }
        this.rawLiftingValues = this.data.getData().lifts;
    }

    public onFormFocusOut(): void {
        this.data.setLifts(this.rawLiftingValues);
    }

    public isTemplateInUse(): boolean {
        return Global.Util.templateInUseSelected(this.data.getData());
    }

    public liftNotUsedInTemplate(exercise: ExerciseGroupData): boolean {
        let inUse = false;
        this.templateInUse.days.forEach(day => {
            day.blocks.forEach(block => {
                if (block.exercise.name === exercise.value) {
                    inUse = true;
                }
            });
        });
        return !inUse;
    }

}
