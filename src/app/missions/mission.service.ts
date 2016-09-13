/**
 * Created by TNN on 29/08/2016
 */
import { Injectable } from '@angular/core';
import { Mission } from './mission';

@Injectable()
export class MissionService {

    missions: Mission[] = [
        { claimFolder_id: 1, id : 1, description : 'Mission 1' },
        { claimFolder_id: 2, id : 2, description : 'Mission 2' },
        { claimFolder_id: 3, id : 3, description : 'Mission 3' }
    ];

    getMission(id: number) {
        return this.missions.find( mission => mission.claimFolder_id === id);
    }

    getMissions(): Promise<Mission[]> {
        return Promise.resolve(this.missions);
    }

}