import { Pipe, PipeTransform } from '@angular/core';

import { EXERCISE_GROUPS } from '../static/exercise-data';

@Pipe({ name: 'exercise' })
export class ExercisePipe implements PipeTransform {

    public transform(value: string): string {
        const groups = EXERCISE_GROUPS;
        
        let exerciseName = 'Invalid Exercise';
        groups.forEach(group => {
            group.exercises.forEach(exercise => {
                if (exercise.value === value) {
                    exerciseName = exercise.display;
                }
            });
        });
        
        return exerciseName;
    }

}
