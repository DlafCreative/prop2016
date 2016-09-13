/**
 * Created by TNN on 25/08/2016
 */
import {
    Component,
    Input,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';

import { Mission } from "../missions/mission";

@Component({
    selector: 'mission-card',
    templateUrl: 'mission-card.component.html',
    styles: [`
        .card {
            margin-top: 0;
        }
    `],
    animations: [
        trigger('inflateIn', [
            transition('void => *', [
                animate(100, style({ transform: 'scale(1.1)'}))
            ]),
            transition('* => *', [
                animate(100, style({ transform: 'scale(1.1)'}))
            ])
        ])
    ]
})
export class MissionCardComponent {

    @Input()
    mission: Mission;

}