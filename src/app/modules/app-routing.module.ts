import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../routes/auth.guard';
import { HomeOverviewComponent } from '../routes/home/children/overview/home-overview.component';
import { WeekComponent } from '../routes/home/children/week/week.component';
import { HomeComponent } from '../routes/home/home.component';
import { LiftsComponent } from '../routes/lifts/lifts.component';
import { LoginComponent } from '../routes/login/login.component';
import { EditTemplateComponent } from '../routes/template/children/edit/edit-template.component';
import { TemplateOverviewComponent } from '../routes/template/children/overview/template-overview.component';
import { TemplateComponent } from '../routes/template/template.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    { path: 'login', component: LoginComponent },
    {
        path: '',
        canActivate: [AuthGuard],
        children: [
            {
                path: 'home',
                component: HomeComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'overview',
                        pathMatch: 'full'
                    },
                    {
                        path: 'overview',
                        component: HomeOverviewComponent
                    },
                    {
                        path: 'week',
                        component: WeekComponent
                    }
                ]
            },
            {
                path: 'template',
                component: TemplateComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'overview',
                        pathMatch: 'full'
                    },
                    {
                        path: 'overview',
                        component: TemplateOverviewComponent
                    },
                    {
                        path: 'edit',
                        component: EditTemplateComponent
                    }
                ]
            },
            {
                path: 'lifts',
                component: LiftsComponent
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule { }
