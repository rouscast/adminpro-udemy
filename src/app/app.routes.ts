import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { LoginComponent } from './login/login.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';
const appRoutes: Routes = [
    {
        path: '', component: PagesComponent,
        children: [
            { path: 'progress', component: ProgressComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'grafica1', component: Graficas1Component },

            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]

    },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: NopagefoundComponent },

]

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });