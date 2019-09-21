import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HospitalComponent} from './Components/hospital/hospital.component';
import {DonaterComponent} from './Components/donater/donater.component';
import {LoginComponent} from './Components/login/login.component';
import { ProfileComponent } from './Components/hospital/profile/profile.component';
import { RequestDonationComponent } from './Components/hospital/request-donation/request-donation.component';


const routes: Routes = [
  { path: 'hospital', component: HospitalComponent, children: [
    {path:'', component: ProfileComponent},
    {path:'request', component: RequestDonationComponent},

  ]},
  { path: 'donater', component: DonaterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
