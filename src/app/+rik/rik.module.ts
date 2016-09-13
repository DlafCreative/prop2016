/**
 * Created by TNN on 22/08/2016.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import shared modules
import { MaterialDesignModule } from '../shared/material-design/material-design.module';

// Import Repair in Kind routes
import { rikRouting } from './rik.routing';

// Import app modules
import { MissionDashboardComponent } from './mission-dashboard.component';
import { MissionDetailComponent } from './third-party/mission-detail.component';

@NgModule({
    imports: [
        BrowserModule,
        MaterialDesignModule,
        rikRouting
    ],
    declarations: [
        MissionDashboardComponent,
        MissionDetailComponent
    ]
})
export default class RikModule { }