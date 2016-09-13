/**
 * Created by TNN on 01/09/2016
 */
import { NgModule } from '@angular/core';

// Import Materialize CSS + Directives
import 'materialize-css';
import 'angular2-materialize';

import { MaterializeDirective } from 'angular2-materialize';

@NgModule({
    declarations:   [ MaterializeDirective ],
    exports:        [ MaterializeDirective ]
})
export class MaterialDesignModule {
}