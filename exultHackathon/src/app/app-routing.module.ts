import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HospitalComponent} from './Components/hospital/hospital.component';
import {DonaterComponent} from './Components/donater/donater.component';
import {LoginComponent} from './Components/login/login.component';


const routes: Routes = [
  { path: 'hospital', component: HospitalComponent },
  { path: 'donater', component: DonaterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
