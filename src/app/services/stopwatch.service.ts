import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription, timer } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

@Injectable()
export class StopwatchService {

    public timeToWait = 90;
    public isTicking$: BehaviorSubject<boolean>;
    private isTicking = false;

    public stopwatch$: BehaviorSubject<number>;
    private stopwatchSub: Subscription;

    constructor() { 
        this.isTicking$ = new BehaviorSubject(true);
        this.stopwatch$ = new BehaviorSubject(0);
        this.startStopwatch();
    }

    public startStopwatch(): void {
        if (this.isTicking) { return; }
        
        this.isTicking$.next(true);
        this.isTicking = true;
        this.stopwatchSub = timer(0, 100).pipe(
            map(val =>  this.timeToWait - Math.round(val / 10)),
            tap(val => {
                if (val <= 0) {
                    this.isTicking$.next(false);
                    this.isTicking = false;
                }
            }),
            takeWhile(val => val > 0)
        ).subscribe(timerValue => this.stopwatch$.next(timerValue));
    }

    public cancelStopwatch(): void {
        this.stopwatchSub.unsubscribe();
        this.isTicking = false;
        this.isTicking$.next(false);
    }

}
