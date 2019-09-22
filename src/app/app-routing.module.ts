import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HospitalComponent} from './Components/hospital/hospital.component';
import {DonaterComponent} from './Components/donater/donater.component';
import {LoginComponent} from './Components/login/login.component';
import {ProfileComponent} from './Components/hospital/profile/profile.component';
import {RequestDonationComponent} from './Components/hospital/request-donation/request-donation.component';
import {DonaterProfileComponent} from './Components/donater/donater-profile/donater-profile.component';
import {RequestsComponent} from './Components/donater/requests/requests.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DashboardHospitalsComponent } from './Components/dashboard/dashboard-hospitals/dashboard-hospitals.component';
import { DashboardDonatersComponent } from './Components/dashboard/dashboard-donaters/dashboard-donaters.component';
import { DashboardRequestsComponent } from './Components/dashboard/dashboard-requests/dashboard-requests.component';
import { HomepageComponent } from './Components/homepage/homepage.component';


const routes: Routes = [
  {
    path: 'hospital', component: HospitalComponent, children: [
      {path: '', component: ProfileComponent},
      {path: 'request', component: RequestDonationComponent},
    ]
  },
  {
    path: 'donater', component: DonaterComponent, children: [
      {path: '', component: RequestsComponent},
      {path: 'profile', component: DonaterProfileComponent}

    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'signUp', component: SignupComponent},
  {path: 'contactUs', component: ContactUsComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: '', component: DashboardDonatersComponent},
    {path: 'hospitals', component: DashboardHospitalsComponent},
    {path: 'donaters', component: DashboardDonatersComponent},
    {path: 'requests', component: DashboardRequestsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
