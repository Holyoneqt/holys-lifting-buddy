import { Injectable } from '@angular/core';

import { AppData, initialAppData } from '../models/data.model';
import { Template } from '../models/template.model';
import { TrainingWeek } from '../models/week.model';

@Injectable()
export class DataService {

    private readonly dataKey = 'hlb-data';

    private data: AppData;

    constructor() {
        if (localStorage.getItem(this.dataKey)) {
            this.readData();
        } else {
            this.data = { ...initialAppData };
            this.writeData();
        }
    }

    public getData(): AppData {
        return this.data;
    }

    private writeData(): void {
        localStorage.setItem(this.dataKey, JSON.stringify(this.data));
    }

    private readData(): void {
        this.data = JSON.parse(localStorage.getItem(this.dataKey));
    }

    public addWeek(week: TrainingWeek): void {
        this.data.weeks = [
            week,
            ...this.data.weeks
        ];
        this.writeData();
    }

    public addOrUpdateTemplate(template: Template): void {
        if (this.data.templates.find(tmp => tmp.name === template.name)) {
            const index = this.data.templates.findIndex(tmp => tmp.name === template.name);
            this.data.templates[index] = template;
        } else {
            this.data.templates.push(template);
        }
        this.writeData();
    }

    public setLifts(lifts): void {
        this.data.lifts = lifts;
        this.writeData();
    }

}
