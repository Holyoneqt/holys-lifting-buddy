export interface ExerciseGroup {
    disabled?: boolean;
    name: string;
    exercises: ExerciseGroupData[];
}

export interface ExerciseGroupData {
    value: string;
    display: string;
}

export const EXERCISE_GROUPS: ExerciseGroup[] = [
    {
        name: 'Big Three',
        exercises: [
            { value: '1', display: 'Bench Press' },
            { value: '2', display: 'Deadlift' },
            { value: '3', display: 'Squat' },
        ]
    },
    {
        name: 'Back',
        exercises: [
            { value: '4', display: 'Back Row' },
        ]
    },
    {
        name: 'Legs',
        exercises: [
            { value: '5', display: 'Front Squat' },
            { value: '6', display: 'Pin Squat' },
            { value: '7', display: 'Paused Squat' },
            { value: '8', display: 'Sumo Deadlift' },
            { value: '9', display: 'Hex-Bar Deadlift' },
        ]
    },
    {
        name: 'Chest / Shoulder',
        exercises: [
            { value: '10', display: 'Shoulder Press' },
            { value: '11', display: 'Pin Press' },
            { value: '12', display: 'Close Grip Bench Press' },
        ]
    },
];
