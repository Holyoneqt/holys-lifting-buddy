import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class AppInitializeService {

    constructor(private auth: AuthService) { }

    async initializeApp(): Promise<void> {
        
    }

}
