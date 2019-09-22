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
import {DonationRequestsComponent} from './Components/donation-requests/donation-requests.component';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {TabMenuModule} from 'primeng/tabmenu';

// import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';CdkVirtualScrollViewport
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { RequestsComponent } from './Components/donater/requests/requests.component';
import { DonaterProfileComponent } from './Components/donater/donater-profile/donater-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalComponent,
    DonaterComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestDonationComponent,
    DonationRequestsComponent,
    ContactUsComponent,
    AboutUsComponent,
    RequestsComponent,
    DonaterProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, AccordionModule, HttpClientModule, BrowserAnimationsModule, SidebarModule, DataViewModule, DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
