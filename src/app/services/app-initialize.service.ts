import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { DataService } from './data.service';
import { StopwatchService } from './stopwatch.service';

@Injectable()
export class AppInitializeService {

    constructor(private auth: AuthService, private data: DataService, private stopwatch: StopwatchService) { }

    async initializeApp(): Promise<void> {
        
    }

}
