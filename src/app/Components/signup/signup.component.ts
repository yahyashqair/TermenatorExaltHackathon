import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { HospitalService } from '../../Services/hospital.service';
import { DonaterModel } from '../../models/donater.model';
import { DonaterService } from '../../Services/donater-service.service';
import { HospitalModel } from '../../models/hospital.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  nameType:string='donater';
  constructor(public authService: AuthService, private hospitalService: HospitalService, private donaterService: DonaterService) {
  }

  ngOnInit() {

  }
  isDonator() {
    console.log(this.nameType);
    console.log(this.nameType == 'donater');
    return this.nameType === 'donater';
  }
  isHostpital() {
    console.log(this.nameType);
    console.log(this.nameType == 'hospital');
    return this.nameType === 'hospital';
  }
  changeVar(type:string)
  {
this.nameType=type;
  }
  signDonator(name: string, birthday: string, gender: string,bloodType:string, phone: string,Address:string, email: string, password: string) {
 
    this.authService.signUp(email, password);
 
      let donator: DonaterModel = new DonaterModel();
      donator.phone = phone;
      donator.city = Address;
      donator.name = name;
      donator.gender = gender;
      donator.bloodType = bloodType;
      console.log(donator);
      this.donaterService.saveDonater(donator);
    

  }
  signHospital(name:string,Address:string,phone:string,email:string, password:string){
  
    this.authService.signUp(email, password);
      let hospital: HospitalModel = new HospitalModel();
      hospital.phoneNumber = phone;
      hospital.name = name;
      hospital.email = email;
      hospital.city = Address;
      console.log("55555");
      this.hospitalService.saveHospital(hospital);
    } 
  }

