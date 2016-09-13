/**
 * Created by TNN on 31/08/2016
 */
// import { Component } from '@angular/core';
import { ChildComponent } from '../shared/child-component';
import { BaseDashboardComponent } from '../shared/base-dashboard/base-dashboard.component';

import { MissionCardComponent } from './mission-card.component';

import { MissionService } from '../missions/mission.service';

@ChildComponent({
    selector:       'prop-mission-list',
    templateUrl:    'mission-dashboard.component.html',
    directives:     [ MissionCardComponent ],
    providers:      [ MissionService ]
})
export class MissionDashboardComponent extends BaseDashboardComponent {

    constructor(private missionService: MissionService){}

    ngOnInit(){
        this.missionService
            .getMissions()
            .then( missions => { this.entities = missions });
    }
}