import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { ExercisePipe } from 'src/app/global/pipes/exercise.pipe';
import { Global } from 'src/app/global/util/util';
import { Exercise } from 'src/app/models/exercise.model';
import { Progress } from 'src/app/models/progress.model';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-progress',
    templateUrl: 'progress.component.html',
    styleUrls: ['progress.component.css']
})
export class ProgressComponent implements OnInit {

    private readonly colors = ['#f44336', '#3f51b5', '#4caf50', '#e91e63', '#2196f3', '#ff9800', '#ff5722', '#8bc34a', '#00bcd4', '#cddc39', '#f0e68c', '#673ab7'];

    public selectValue: string[];

    public exercisesInTemplate: Exercise[];
    public progress: Progress[];

    public chart: Chart;
    private chartContext: CanvasRenderingContext2D;

    constructor(private data: DataService) { }

    public ngOnInit(): void {
        this.progress = this.data.getData().progress;
        this.exercisesInTemplate = Global.Util.getExercisesUsedInTemplate(Global.Util.getTemplateInUse(this.data.getData()));

        this.chartContext = (<HTMLCanvasElement>document.getElementById('chart')).getContext('2d');
        this.chart = new Chart(this.chartContext, {
            type: 'line',
            data: this.getChartData(),
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                stepSize: 2.5,
                                maxTicksLimit: 10,
                            }
                        }
                    ]
                }
            }
        });

        this.onSelectValueChange([this.exercisesInTemplate[0].name || '1']);
    }

    public onSelectValueChange(selectedExercises: string[]): void {
        this.selectValue = selectedExercises;

        this.chart.data = this.getChartData(...selectedExercises);
        this.chart.update();
    }

    private getChartData(...exerciseIds: string[]) {
        const exercisePipe = new ExercisePipe();
        const data = { labels: [], datasets: [] };
        this.progress.forEach(p => {
            data.labels.push(`W${Global.Util.getWeekNumber(new Date(p.weekStart))}`);

            exerciseIds.forEach(exerciseId => {
                const indexOf = data.datasets.findIndex(dataSet => dataSet.label === exercisePipe.transform(exerciseId));
                if (indexOf === -1) {
                    data.datasets.push({
                        label: exercisePipe.transform(exerciseId),
                        backgroundColor: `${this.colors[exerciseId]}2a`,
                        borderColor: this.colors[exerciseId],
                        data: [p.lifts[exerciseId]],
                    });
                } else {
                    data.datasets[indexOf].data.push(p.lifts[exerciseId]);
                }
            });
        });

        return data;
    }

}
