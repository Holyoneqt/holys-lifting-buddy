export type ExerciseType = 'main' | 'accessorie';

export interface Exercise {
    /** this is the short name (ID) */
    name: string;
    type: ExerciseType;
    weekMax?: number;
}

export interface Set {
    reps: number;
    weightPercentage: number;
    amrap?: boolean;
    amrapReps?: string;
    progression?: boolean;
    done?: boolean;
    failed?: boolean;
}
