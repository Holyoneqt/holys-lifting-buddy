import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../routes/auth.guard';
import { LoginComponent } from '../routes/login/login.component';
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
