import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
    declarations: [

        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,

    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule { }