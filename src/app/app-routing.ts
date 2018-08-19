import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ListLinkComponent } from './link/list-link/list-link.component';
import { EditLinkComponent } from './link/edit-link/edit-link.component';
import { AddLinkComponent } from './link/add-link/add-link.component';
const myRoutes = [
  { path: '', component: ListLinkComponent },
  { path: 'list-link', component: ListLinkComponent },
  { path: 'edit-link', component: EditLinkComponent },
  { path: 'add-link', component: AddLinkComponent }
];

export const MY_ROUTES: ModuleWithProviders = RouterModule.forRoot(myRoutes);
