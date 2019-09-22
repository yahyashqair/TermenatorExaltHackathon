import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {ProfileComponent} from './Components/hospital/profile/profile.component';
import {RequestDonationComponent} from './Components/hospital/request-donation/request-donation.component';
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
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {TabMenuModule} from 'primeng/tabmenu';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
// import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';CdkVirtualScrollViewport
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { RequestsComponent } from './Components/donater/requests/requests.component';
import { DonaterProfileComponent } from './Components/donater/donater-profile/donater-profile.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DashboardHospitalsComponent } from './Components/dashboard/dashboard-hospitals/dashboard-hospitals.component';
import { DashboardDonatersComponent } from './Components/dashboard/dashboard-donaters/dashboard-donaters.component';
import { DashboardRequestsComponent } from './Components/dashboard/dashboard-requests/dashboard-requests.component';
import { HomepageComponent } from './Components/homepage/homepage.component';

const firebaseConfig = {
  apiKey: "AIzaSyD5RcBoU4DLPma6u7d-LsGg3XPfhfCWOkI",
  authDomain: "termenatorexalthackathon.firebaseapp.com",
  databaseURL: "https://termenatorexalthackathon.firebaseio.com",
  projectId: "termenatorexalthackathon",
  storageBucket: "",
  messagingSenderId: "320316105652",
  appId: "1:320316105652:web:16ba3f2d7d8ad78fb6c8e1"
};

@NgModule({
  declarations: [
    AppComponent,
    HospitalComponent,
    DonaterComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestDonationComponent,
  
    ContactUsComponent,
    AboutUsComponent,
    RequestsComponent,
    DonaterProfileComponent,
    DashboardComponent,
    DashboardHospitalsComponent,
    DashboardDonatersComponent,
    DashboardRequestsComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, AccordionModule, HttpClientModule, BrowserAnimationsModule, SidebarModule, DataViewModule, DropdownModule,AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
