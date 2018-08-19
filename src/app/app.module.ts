import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { MY_ROUTES } from './app-routing';
import { UserService } from './user.service';
import { ListLinkComponent } from './link/list-link/list-link.component';
import { EditLinkComponent } from './link/edit-link/edit-link.component';
import { AddLinkComponent } from './link/add-link/add-link.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListLinkComponent,
    EditLinkComponent,
    AddLinkComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MY_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
