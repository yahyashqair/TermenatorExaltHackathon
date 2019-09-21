import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalComponent } from './Components/hospital/hospital.component';
import { DonaterComponent } from './Components/donater/donater.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ProfileComponent } from './Components/hospital/profile/profile.component';
import { RequestDonationComponent } from './Components/hospital/request-donation/request-donation.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalComponent,
    DonaterComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestDonationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
