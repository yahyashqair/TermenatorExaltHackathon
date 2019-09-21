import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { ProfileComponent } from './Components/hospital/profile/profile.component';
import { RequestDonationComponent } from './Components/hospital/request-donation/request-donation.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HospitalComponent} from './Components/hospital/hospital.component';
import {DonaterComponent} from './Components/donater/donater.component';
import {LoginComponent} from './Components/login/login.component';
import {SignupComponent} from './Components/signup/signup.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidebarModule} from 'primeng/sidebar';
import { DonationRequestsComponent } from './Components/donation-requests/donation-requests.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalComponent,
    DonaterComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestDonationComponent,
    DonationRequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, AccordionModule, BrowserAnimationsModule,SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
