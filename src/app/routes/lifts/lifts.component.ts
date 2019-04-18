import { Component, OnInit } from '@angular/core';
import { EXERCISE_GROUPS } from 'src/app/global/static/exercise-data';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-lifts',
    templateUrl: 'lifts.component.html',
    styleUrls: ['lifts.component.css']
})
export class LiftsComponent implements OnInit {
    
    public exercisesGroups = EXERCISE_GROUPS;

    public rawLiftingValues;
    
    constructor(private data: DataService) { }

    public ngOnInit(): void {
        this.rawLiftingValues = this.data.getData().lifts;
    }

    public onFormFocusOut(): void {
        this.data.setLifts(this.rawLiftingValues);
    }

}
