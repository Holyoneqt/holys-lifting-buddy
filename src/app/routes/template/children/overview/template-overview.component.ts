import { Component, OnInit } from '@angular/core';
import { Template } from 'src/app/models/template.model';

@Component({
    selector: 'app-template-overview',
    templateUrl: 'template-overview.component.html',
    styleUrls: ['template-overview.component.css']
})
export class TemplateOverviewComponent implements OnInit {
    
    public templates: Template[];

    constructor() { }

    ngOnInit() {
        this.templates = [ JSON.parse(localStorage.getItem('template')) ];
    }

    public getNumTrainingDays(template: Template): number {
        return template.days.filter(day => day.blocks.length > 0).length;
    }

}
