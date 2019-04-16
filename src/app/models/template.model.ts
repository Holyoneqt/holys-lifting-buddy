import { Exercise, Set } from './exercise.model';

export interface Template {
    name: string;
    inUse: boolean;
    days: TrainingDay[];
}

export interface TrainingDay {
    index: number;
    blocks: TrainingDayBlock[];
}

export interface TrainingDayBlock {
    exercise: Exercise;
    sets: Set[];
}
