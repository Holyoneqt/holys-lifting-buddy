import { Template } from './template.model';

export interface TrainingWeek {
    id: string;
    weekStart: number;
    weekEnd: number;
    template: Template;
}
