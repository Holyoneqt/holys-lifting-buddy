import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppFirebaseModule } from './modules/app-firebase.module';
import { AppInitializeModule } from './modules/app-initialize.module';
import { AppMaterialModule } from './modules/app-material.module';
import { AppRoutingModule } from './modules/app-routing.module';
import { SharedModule } from './modules/shared.module';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component';
import { EditTemplateComponent } from './routes/template/children/edit/edit-template.component';
import { TemplateOverviewComponent } from './routes/template/children/overview/template-overview.component';
import { SetsDialogComponent } from './routes/template/components/sets-dialog/sets-dialog.component';
import { TemplateComponent } from './routes/template/template.component';
import { AuthService } from './services/auth.service';
import { DbService } from './services/db.service';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        
        TemplateComponent,
        TemplateOverviewComponent,
        EditTemplateComponent,
        SetsDialogComponent,
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
    ],
    providers: [
        AuthService,
        DbService,
    ],
    entryComponents: [
        SetsDialogComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
