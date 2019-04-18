import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Template } from 'src/app/models/template.model';
import { TrainingWeek } from 'src/app/models/week.model';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-home-overview',
    templateUrl: 'home-overview.component.html',
    styleUrls: ['home-overview.component.css']
})
export class HomeOverviewComponent implements OnInit {

    private maxLifts: { [key: string]: number };

    public weeks: TrainingWeek[];

    constructor(private data: DataService, private router: Router) { }

    public ngOnInit(): void {
        this.weeks = this.data.getData().weeks;
        this.maxLifts = this.data.getData().lifts;
    }

    public newTrainingsWeek(): void {
        const currentTemplate = this.data.getData().templates.find(template => template.inUse === true);
        const prettyTemplate: Template = {
            inUse: true,
            name: currentTemplate.name,
            days: currentTemplate.days.filter(day => day.blocks.length > 0),
        };
        prettyTemplate.days.forEach(day => {
            day.blocks = day.blocks.map(block => {
                return {
                    ...block,
                    exercise: {
                        weekMax: this.maxLifts[block.exercise.name] || 0,
                        ...block.exercise,
                    }
                };
            });
        });

        const nextWeekDate = new Date(new Date().setDate(new Date().getDate() + 7));
        this.data.addWeek({
            weekStart: this.getStartOfWeek(nextWeekDate).getTime(),
            weekEnd: this.getEndOfWeek(nextWeekDate).getTime(),
            template: prettyTemplate,
        });
        this.weeks = this.data.getData().weeks;
    }

    public viewWeek(week: TrainingWeek): void {
        this.data.setRoutingParameter(week);
        this.router.navigate(['home/week']);
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
