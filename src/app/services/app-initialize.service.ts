import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { DataService } from './data.service';

@Injectable()
export class AppInitializeService {

    constructor(private auth: AuthService, private data: DataService) { }

    async initializeApp(): Promise<void> {
        
    }

}
