/**
 * Created by TNN on 31/08/2016
 */
import { Component } from '@angular/core';

@Component({
    templateUrl:    'base-dashboard.component.html',
    styleUrls:      ['base-dashboard.component.css']
})
export class BaseDashboardComponent {

    entities: any;

    selectedEntity: any;

    showEntityCard(entity): void {
        this.selectedEntity = entity;
    }

    isSelected(entity): boolean {
        if (!entity || !this.selectedEntity){
            return false;
        }
        return entity.id === this.selectedEntity.id;
    }
}