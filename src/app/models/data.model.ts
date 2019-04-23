import { defaultTemplates } from '../global/static/constants';
import { Template } from './template.model';
import { TrainingWeek } from './week.model';

export interface AppData {
    /** All Templates of the User */
    templates: Template[];
    /** All Weeks of the User */
    weeks: TrainingWeek[];
    /** All the Max-Lifts of the User */
    lifts: { [key: string]: number };
}

export const initialAppData: AppData = {
    lifts: {},
    templates: [
        ...defaultTemplates
    ],
    weeks: [],
};
