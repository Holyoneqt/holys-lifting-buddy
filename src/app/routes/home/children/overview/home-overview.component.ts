import { Component, OnInit } from '@angular/core';
import { TrainingWeek } from 'src/app/models/week.model';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-home-overview',
    templateUrl: 'home-overview.component.html',
    styleUrls: ['home-overview.component.css']
})
export class HomeOverviewComponent implements OnInit {

    public weeks: TrainingWeek[];

    constructor(private data: DataService) { }

    public ngOnInit(): void {
        this.weeks = this.data.getData().weeks;
    }

    public newTrainingsWeek(): void {
        const currentTemplate = this.data.getData().templates.find(template => template.inUse === true);

        const nextWeekDate = new Date(new Date().setDate(new Date().getDate() + 7));
        this.data.addWeek({
            weekStart: this.getStartOfWeek(nextWeekDate).getTime(),
            weekEnd: this.getEndOfWeek(nextWeekDate).getTime(),
            template: currentTemplate
        });
        this.weeks = this.data.getData().weeks;
    }

    private getStartOfWeek(date: Date): Date {
        const diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
        return new Date(date.setDate(diff));
    }

    private getEndOfWeek(date: Date): Date {
        const startOfWeek = this.getStartOfWeek(date);
        return new Date(startOfWeek.setDate(startOfWeek.getDate() + 6));
    }

}
