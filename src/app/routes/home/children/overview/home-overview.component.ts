import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from 'src/app/global/util/util';
import { Set } from 'src/app/models/exercise.model';
import { Template, TrainingDay, TrainingDayBlock } from 'src/app/models/template.model';
import { TrainingWeek } from 'src/app/models/week.model';
import { DataService } from 'src/app/services/data.service';
import { v4 as uuid } from 'uuid';

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
        const template = this.data.getData().templates.find(tmp => tmp.inUse === true);
        this.increaseMaxes(this.data.getData().weeks[0]);
        const maxLiftsForThisWeek = {};
        const currentTemplate: Template = { 
            ...template,
            days: template.days.map(day => {
                return {
                    ...day,
                    blocks: day.blocks.map(block => {
                        maxLiftsForThisWeek[block.exercise.name] = this.maxLifts[block.exercise.name] || 0;
                        return {
                            exercise: {
                                ...block.exercise,
                                weekMax: this.maxLifts[block.exercise.name] || 0
                            },
                            sets: block.sets.map(set => {
                                return {
                                    ...set,
                                    done: false,
                                    amrapReps: undefined,
                                } as Set;
                            })
                        } as TrainingDayBlock;
                    }),
                } as TrainingDay;
            }),
        };
        
        const prettyTemplate: Template = {
            inUse: true,
            name: currentTemplate.name,
            days: currentTemplate.days.filter(day => day.blocks.length > 0),
        };

        const thisWeeksStart = this.getStartOfWeek(new Date()).getTime();
        const currentWeek = this.data.getData().weeks.find(w => {
            const week = new Date(w.weekStart), thisWeek = new Date(thisWeeksStart);
            return `${week.getDate()}.${week.getMonth()}.${week.getFullYear()}` === `${thisWeek.getDate()}.${thisWeek.getMonth()}.${thisWeek.getFullYear()}`;
        });
        let weekStart, weekEnd;
        if (currentWeek) {
            const nextWeekDate = new Date(new Date().setDate(new Date().getDate() + 7));
            weekStart = this.getStartOfWeek(nextWeekDate).getTime();
            weekEnd = this.getEndOfWeek(nextWeekDate).getTime();
        } else {
            weekStart = this.getStartOfWeek(new Date()).getTime();
            weekEnd = this.getEndOfWeek(new Date()).getTime();
        }

        this.data.addWeek({
            id: uuid(),
            weekStart: weekStart,
            weekEnd: weekEnd,
            template: prettyTemplate,
        });
        this.weeks = this.data.getData().weeks;

        
        this.data.addProgress({
            weekStart: weekStart,
            lifts: maxLiftsForThisWeek
        });
    }

    private increaseMaxes(lastWeek: TrainingWeek): void {
        if (!lastWeek) { return; }
        lastWeek.template.days.forEach(day => {
            day.blocks.forEach(block => {
                const progressionSet = block.sets.find(set => set.progression);
                if (progressionSet && progressionSet.amrap) {
                    let increaseBy = 0;
                    switch (progressionSet.amrapReps) {
                        case undefined:
                        case '0': 
                        case '1': 
                            increaseBy = 0;
                            break;
                        case '2':
                        case '3':
                        case '4':
                            increaseBy = 2.5;
                            break;
                        default: 
                            increaseBy = 5;
                            break;
                    }

                    this.maxLifts[block.exercise.name] += increaseBy;
                } else if (progressionSet && !progressionSet.amrap) {
                    if (progressionSet.done) {
                        this.maxLifts[block.exercise.name] += 2.5;
                    }
                }
            });
        });
        this.data.setLifts(this.maxLifts);
    }

    public templateInUseSelected(): boolean {
        return Global.Util.templateInUseSelected(this.data.getData());
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
