import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserLogInComponent } from './components/user-log-in/user-log-in.component';
import { UserAddOrEditComponent } from './components/user-add-or-edit/user-add-or-edit.component';
import { UserViewComponent } from './components/user-view/user-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserListComponent,
    UserLogInComponent,
    UserAddOrEditComponent,
    UserViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
