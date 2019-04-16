import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../routes/auth.guard';
import { LoginComponent } from '../routes/login/login.component';
import { EditTemplateComponent } from '../routes/template/children/edit/edit-template.component';
import { TemplateOverviewComponent } from '../routes/template/children/overview/template-overview.component';
import { TemplateComponent } from '../routes/template/template.component';
import { HomeComponent } from './../routes/home/home.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '',
        canActivate: [AuthGuard],
        children: [
            {
                path: 'home',
                component: HomeComponent
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
