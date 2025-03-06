import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'adminPortal',
    loadChildren: () =>
      import('adminPortal/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'studentPortal',
    loadChildren: () =>
      import('studentPortal/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
