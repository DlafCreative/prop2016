/**
 * Created by TNN on 22/08/2016.
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Mission } from '../../missions/mission';

import { MissionService } from '../../missions/mission.service';

@Component({
    selector: 'rik-mission-detail',
    templateUrl: 'mission-detail.component.html',
    styles: [`
        #missionDetailWrapper {
            padding: 10px;        
        }
        #buttonWrapper {
            padding: 20px 0;
        }
    `],
    providers: [ MissionService ]
})
export class MissionDetailComponent {

    mission: Mission;

    constructor(
        private activatedRoute: ActivatedRoute,
        private missionService: MissionService
    ){}

    ngOnInit(){
        this.activatedRoute.params.forEach( (params: Params) => {
            let missionId = +params['id'];
            this.mission = this.missionService.getMission(missionId);
        });
    }

    goBack(){
        window.history.back();
    }

}