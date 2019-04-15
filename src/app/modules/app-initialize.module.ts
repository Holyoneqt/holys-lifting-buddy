import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppInitializeService } from './../services/app-initialize.service';


export function initApp(appInitService: AppInitializeService) {
    return () => appInitService.initializeApp();
}

@NgModule({
  imports: [ HttpModule, HttpClientModule ],
  providers: [
    AppInitializeService,
    { provide: APP_INITIALIZER, useFactory: initApp, deps: [ AppInitializeService ], multi: true }
  ]
})
export class AppInitializeModule { }
