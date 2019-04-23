import { Template } from 'src/app/models/template.model';

export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const defaultTemplates: Template[] = [
    // nSuns (5 Days)
    {
        name: 'nSuns (5 Days)',
        inUse: false,
        days: [
            {
                index: 0,
                blocks: [
                    {
                        exercise: {
                            name: '1',
                            type: 'main'
                        },
                        sets: [
                            {
                                reps: 8,
                                weightPercentage: 65,
                            },
                            {
                                reps: 6,
                                weightPercentage: 75,
                            },
                            {
                                reps: 4,
                                weightPercentage: 85,
                            },
                            {
                                reps: 4,
                                weightPercentage: 85,
                            },
                            {
                                reps: 4,
                                weightPercentage: 85,
                            },
                            {
                                reps: 5,
                                weightPercentage: 80,
                            },
                            {
                                reps: 6,
                                weightPercentage: 75,
                            },
                            {
                                reps: 7,
                                weightPercentage: 70,
                            },
                            {
                                reps: 8,
                                weightPercentage: 65,
                                amrap: true,
                            },
                        ]
                    },
                    {
                        exercise: {
                            name: '10',
                            type: 'main'
                        },
                        sets: [
                            {
                                reps: 6,
                                weightPercentage: 50,
                            },
                            {
                                reps: 5,
                                weightPercentage: 60,
                            },
                            {
                                reps: 3,
                                weightPercentage: 70,
                            },
                            {
                                reps: 5,
                                weightPercentage: 70,
                            },
                            {
                                reps: 7,
                                weightPercentage: 70,
                            },
                            {
                                reps: 4,
                                weightPercentage: 70,
                            },
                            {
                                reps: 6,
                                weightPercentage: 70,
                            },
                            {
                                reps: 8,
                                weightPercentage: 70,
                            },
                        ]
                    }
                ]
            },
            {
                index: 1,
                blocks: [
                    {
                        exercise: {
                            name: '3',
                            type: 'main'
                        },
                        sets: [
                            {
                                reps: 5,
                                weightPercentage: 75,
                            },
                            {
                                reps: 3,
                                weightPercentage: 75,
                            },
                            {
                                reps: 1,
                                weightPercentage: 95,
                                amrap: true,
                                progression: true,
                            },
                            {
                                reps: 3,
                                weightPercentage: 90,
                            },
                            {
                                reps: 3,
                                weightPercentage: 85,
                            },
                            {
                                reps: 3,
                                weightPercentage: 80,
                            },
                            {
                                reps: 5,
                                weightPercentage: 75,
                            },
                            {
                                reps: 5,
                                weightPercentage: 70,
                            },
                            {
                                reps: 5,
                                weightPercentage: 65,
                                amrap: true,
                            },
                        ]
                    },
                    {
                        exercise: {
                            name: '8',
                            type: 'main'
                        },
                        sets: [
                            {
                                reps: 5,
                                weightPercentage: 50,
                            },
                            {
                                reps: 5,
                                weightPercentage: 60,
                            },
                            {
                                reps: 3,
                                weightPercentage: 70,
                            },
                            {
                                reps: 5,
                                weightPercentage: 70,
                            },
                            {
                                reps: 7,
                                weightPercentage: 70,
                            },
                            {
                                reps: 4,
                                weightPercentage: 70,
                            },
                            {
                                reps: 6,
                                weightPercentage: 70,
                            },
                            {
                                reps: 8,
                                weightPercentage: 70,
                            },
                        ]
                    }
                ]
            },
            {
                index: 2,
                blocks: [
                    {
                        exercise: {
                            name: '10',
                            type: 'main'
                        },
                        sets: [
                            {
                                reps: 5,
                                weightPercentage: 75,
                            },
                            {
                                reps: 3,
                                weightPercentage: 75,
                            },
                            {
                                reps: 1,
                                weightPercentage: 95,
                                amrap: true,
                                progression: true,
                            },
                            {
                                reps: 3,
                                weightPercentage: 90,
                            },
                            {
                                reps: 3,
                                weightPercentage: 85,
                            },
                            {
                                reps: 3,
                                weightPercentage: 80,
                            },
                            {
                                reps: 5,
                                weightPercentage: 75,
                            },
                            {
                                reps: 5,
                                weightPercentage: 70,
                            },
                            {
                                reps: 5,
                                weightPercentage: 65,
                                amrap: true,
                            },
                        ]
                    },
                    {
                        exercise: {
                            name: '13',
                            type: 'main'
                        },
                        sets: [
                            {
                                reps: 6,
                                weightPercentage: 40,
                            },
                            {
                                reps: 5,
                                weightPercentage: 50,
                            },
                            {
                                reps: 3,
                                weightPercentage: 60,
                            },
                            {
                                reps: 5,
                                weightPercentage: 60,
                            },
                            {
                                reps: 7,
                                weightPercentage: 60,
                            },
                            {
                                reps: 4,
                                weightPercentage: 60,
                            },
                            {
                                reps: 6,
                                weightPercentage: 60,
                            },
                            {
                                reps: 8,
                                weightPercentage: 60,
                            },
                        ]
                    }
                ]
            },
            {
                index: 3,
                blocks: [
                    {
                        exercise: {
                            name: '2',
                            type: 'main'
                        },
                        sets: [
                            {
                                reps: 5,
                                weightPercentage: 75,
                            },
                            {
                                reps: 3,
                                weightPercentage: 75,
                            },
                            {
                                reps: 1,
                                weightPercentage: 95,
                                amrap: true,
                                progression: true,
                            },
                            {
                                reps: 3,
                                weightPercentage: 90,
                            },
                            {
                                reps: 3,
                                weightPercentage: 85,
                            },
                            {
                                reps: 3,
                                weightPercentage: 80,
                            },
                            {
                                reps: 3,
                                weightPercentage: 75,
                            },
                            {
                                reps: 3,
                                weightPercentage: 70,
                            },
                            {
                                reps: 3,
                                weightPercentage: 65,
                                amrap: true,
                            },
                        ]
                    },
                    {
                        exercise: {
                            name: '5',
                            type: 'main'
                        },
                        sets: [
                            {
                                reps: 5,
                                weightPercentage: 35,
                            },
                            {
                                reps: 5,
                                weightPercentage: 40,
                            },
                            {
                                reps: 3,
                                weightPercentage: 55,
                            },
                            {
                                reps: 5,
                                weightPercentage: 55,
                            },
                            {
                                reps: 7,
                                weightPercentage: 55,
                            },
                            {
                                reps: 4,
                                weightPercentage: 55,
                            },
                            {
                                reps: 6,
                                weightPercentage: 55,
                            },
                            {
                                reps: 8,
                                weightPercentage: 55,
                            },
                        ]
                    }
                ]
            },
            {
                index: 4,
                blocks: [
                    {
                        exercise: {
                            name: '1',
                            type: 'main'
                        },
                        sets: [
                            {
                                reps: 5,
                                weightPercentage: 75,
                            },
                            {
                                reps: 3,
                                weightPercentage: 75,
                            },
                            {
                                reps: 1,
                                weightPercentage: 95,
                                amrap: true,
                                progression: true,
                            },
                            {
                                reps: 3,
                                weightPercentage: 90,
                            },
                            {
                                reps: 5,
                                weightPercentage: 85,
                            },
                            {
                                reps: 3,
                                weightPercentage: 80,
                            },
                            {
                                reps: 5,
                                weightPercentage: 75,
                            },
                            {
                                reps: 3,
                                weightPercentage: 70,
                            },
                            {
                                reps: 5,
                                weightPercentage: 65,
                                amrap: true,
                            },
                        ]
                    },
                    {
                        exercise: {
                            name: '12',
                            type: 'main'
                        },
                        sets: [
                            {
                                reps: 6,
                                weightPercentage: 40,
                            },
                            {
                                reps: 5,
                                weightPercentage: 50,
                            },
                            {
                                reps: 3,
                                weightPercentage: 60,
                            },
                            {
                                reps: 5,
                                weightPercentage: 60,
                            },
                            {
                                reps: 7,
                                weightPercentage: 60,
                            },
                            {
                                reps: 4,
                                weightPercentage: 60,
                            },
                            {
                                reps: 6,
                                weightPercentage: 60,
                            },
                            {
                                reps: 8,
                                weightPercentage: 60,
                            },
                        ]
                    }
                ]
            }
        ]
    }
];
