/**
 * Created by TNN on 22/08/2016.
 */
import { Routes, RouterModule } from '@angular/router';

import { MissionDashboardComponent } from './mission-dashboard.component';
import { MissionDetailComponent } from './third-party/mission-detail.component';

const rikRoutes: Routes =  [
    {
        path:           'dashboard/missions',
        component:      MissionDashboardComponent
    },
    {
        path:           'mission/:id',
        component:      MissionDetailComponent
    }
];

export const rikRouting = RouterModule.forChild(rikRoutes);