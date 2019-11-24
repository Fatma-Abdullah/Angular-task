import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './users/list/list.component';
import { LoginComponent } from './users/login/login.component';

const routes: Routes = [
  {path: '' , component: ListComponent},
  {path: 'login' , component: LoginComponent},
  {path: '**' , component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
