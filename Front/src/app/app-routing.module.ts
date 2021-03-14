import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddOrEditComponent } from './components/user-add-or-edit/user-add-or-edit.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserLogInComponent } from './components/user-log-in/user-log-in.component';
import { UserViewComponent } from './components/user-view/user-view.component';

const routes: Routes = [
  { path: '', component: UserLogInComponent},
  { path: 'signin', component: UserAddOrEditComponent},
  { path: 'edit/:id', component: UserAddOrEditComponent},
  { path: 'list', component: UserListComponent},
  { path: 'view/:id', component: UserViewComponent},
  { path: '**', redirectTo: '/', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
