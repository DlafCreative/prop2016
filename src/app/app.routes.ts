import { Routes, RouterModule } from '@angular/router';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

// AngularClass
// import { provideWebpack } from '@angularclass/webpack-toolkit';
// import { providePrefetchIdleCallbacks } from '@angularclass/request-idle-callback';

export const ROUTES: Routes = [
  {
    path: 'rik', loadChildren: () => require('es6-promise-loader!./+rik/rik.module')('default')
  },
  { path: '**',                     component: NoContentComponent }, // 404
];
