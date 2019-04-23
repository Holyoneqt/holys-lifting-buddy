import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Template } from 'src/app/models/template.model';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-template-overview',
    templateUrl: 'template-overview.component.html',
    styleUrls: ['template-overview.component.css']
})
export class TemplateOverviewComponent implements OnInit {
    
    public templates: Template[];

    constructor(private data: DataService, private router: Router) { }

    ngOnInit() {
        this.templates = this.data.getData().templates;
    }

    public editTemplate(template?: Template): void {
        this.data.setRoutingParameter(template);
        this.router.navigate(['template/edit']);
    }

    public getNumTrainingDays(template: Template): number {
        return template.days.filter(day => day.blocks.length > 0).length;
    }

}
