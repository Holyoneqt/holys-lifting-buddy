import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppFirebaseModule } from './modules/app-firebase.module';
import { AppInitializeModule } from './modules/app-initialize.module';
import { AppMaterialModule } from './modules/app-material.module';
import { AppRoutingModule } from './modules/app-routing.module';
import { SharedModule } from './modules/shared.module';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component';
import { AuthService } from './services/auth.service';
import { DbService } from './services/db.service';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
    ],
    imports: [
        AppInitializeModule,

        BrowserModule,

        // App Modules
        SharedModule,
        AppRoutingModule,
        AppMaterialModule,
        AppFirebaseModule,
    ],
    providers: [
        AuthService,
        DbService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
