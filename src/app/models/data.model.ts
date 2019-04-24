import { defaultTemplates } from '../global/static/constants';
import { Progress } from './progress.model';
import { Template } from './template.model';
import { TrainingWeek } from './week.model';

export interface AppData {
    /** All Templates of the User */
    templates: Template[];
    /** All Weeks of the User */
    weeks: TrainingWeek[];
    /** All the Max-Lifts of the User */
    lifts: { [key: string]: number };
    /** Progress of the User */
    progress: Progress[];
}

export const initialAppData: AppData = {
    lifts: {},
    templates: [
        ...defaultTemplates
    ],
    weeks: [],
    progress: [],
};
