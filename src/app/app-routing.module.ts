import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {Observable, of} from 'rxjs';
import {LoginComponent} from './component/login/login.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent,
  },
    {
      path: 'dashboard', component: DashboardComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
