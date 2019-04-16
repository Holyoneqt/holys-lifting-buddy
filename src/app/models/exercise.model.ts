export type ExerciseType = 'main' | 'accessorie';

export interface Exercise {
    name: string;
    type: ExerciseType;
    max?: number;
}

export interface Set {
    reps: number;
    weightPercentage: number;
    amrap?: boolean;
}
