import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AmrapRepsDialogComponent } from './global/components/amrap-reps-dialog/amrap-reps-dialog.component';
import { StopwatchDialogComponent } from './global/components/stopwatch-dialog/stopwatch-dialog.component';
import { ExercisePipe } from './global/pipes/exercise.pipe';
import { AppFirebaseModule } from './modules/app-firebase.module';
import { AppInitializeModule } from './modules/app-initialize.module';
import { AppMaterialModule } from './modules/app-material.module';
import { AppRoutingModule } from './modules/app-routing.module';
import { SharedModule } from './modules/shared.module';
import { HomeOverviewComponent } from './routes/home/children/overview/home-overview.component';
import { WeekComponent } from './routes/home/children/week/week.component';
import { HomeComponent } from './routes/home/home.component';
import { LiftsComponent } from './routes/lifts/lifts.component';
import { LoginComponent } from './routes/login/login.component';
import { ProgressComponent } from './routes/progress/progress.component';
import { EditTemplateComponent } from './routes/template/children/edit/edit-template.component';
import { TemplateOverviewComponent } from './routes/template/children/overview/template-overview.component';
import { SetsDialogComponent } from './routes/template/components/sets-dialog/sets-dialog.component';
import { TemplateComponent } from './routes/template/template.component';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { DbService } from './services/db.service';
import { StopwatchService } from './services/stopwatch.service';

@NgModule({
    declarations: [
        // Components
        AppComponent,
        LoginComponent,

        HomeComponent,
        HomeOverviewComponent,
        WeekComponent,
        AmrapRepsDialogComponent,

        ProgressComponent,

        TemplateComponent,
        TemplateOverviewComponent,
        EditTemplateComponent,
        SetsDialogComponent,

        LiftsComponent,

        StopwatchDialogComponent,

        // Pipes
        ExercisePipe,
    ],
    imports: [
        AppInitializeModule,

        // Angular Modules
        BrowserModule,
        FormsModule,

        // App Modules
        SharedModule,
        AppRoutingModule,
        AppMaterialModule,
        AppFirebaseModule,
        // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'de-DE' },

        // Services
        AuthService,
        DbService,
        DataService,
        StopwatchService,
    ],
    entryComponents: [
        AmrapRepsDialogComponent,
        SetsDialogComponent,
        StopwatchDialogComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
