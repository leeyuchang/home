import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { ListLinkComponent } from './link/list-link/list-link.component';

const myRoutes = [
  { path: '', component: ListLinkComponent },
//  { path: 'add/:id', component: AddComponent }
];

export const MY_ROUTES: ModuleWithProviders = RouterModule.forRoot(myRoutes);
