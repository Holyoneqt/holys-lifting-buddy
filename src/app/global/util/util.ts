import { AppData } from 'src/app/models/data.model';
import { Exercise } from 'src/app/models/exercise.model';
import { Template } from 'src/app/models/template.model';

export namespace Global.Util {

    /** Returns the Template that is currently selected as 'in use' */
    export function getTemplateInUse(appData: AppData): Template {
        return appData.templates.find(tmp => tmp.inUse === true);
    }

    /** Checks wheter the user has selected an template as 'in use' */
    export function templateInUseSelected(appData: AppData): boolean {
        const templateInUse = appData.templates.find(template => template.inUse === true);
        return templateInUse !== undefined;
    }

    /** Finds all exercises that are used in the template */
    export function getExercisesUsedInTemplate(template: Template): Exercise[] {
        const usedExercises: Exercise[] = [];
        template.days.forEach(day => {
            day.blocks.forEach(block => {
                if (usedExercises.find(e => e.name === block.exercise.name) === undefined) {
                    usedExercises.push(block.exercise);
                }
            });
        });
        return usedExercises;
    }

    /** 
     * For a given date, get the ISO week number
     *
     * Based on information at:
     *
     *    http://www.merlyn.demon.co.uk/weekcalc.htm#WNR
     *
     * Algorithm is to find nearest thursday, it's year
     * is the year of the week number. Then get weeks
     * between that date and the first day of that year.
     *
     * Note that dates in one year can be weeks of previous
     * or next year, overlap is up to 3 days.
     *
     * e.g. 2014/12/29 is Monday in week  1 of 2015
     *      2012/1/1   is Sunday in week 52 of 2011
    */
    export function getWeekNumber(date: Date) {
        const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
        const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        const weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
        return weekNo;
    }

}
