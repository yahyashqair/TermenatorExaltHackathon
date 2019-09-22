import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../Services/auth.service';
import {HospitalService} from '../../Services/hospital.service';
import {DonaterModel} from '../../models/donater.model';
import {DonaterService} from '../../Services/donater-service.service';
import {HospitalModel} from '../../models/hospital.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public  authService: AuthService, private hospitalService: HospitalService, private donaterService: DonaterService) {
  }

  ngOnInit() {
  }

  sign(name: string, birthday: string, gender: string, phone: string, email: string, password: string, type: string) {
    console.log(type);
    this.authService.signUp(email, password);
    if (type === 'hospital') {
      console.log('idiot');
      let hospital : HospitalModel = new HospitalModel();
      hospital.phoneNumber=phone;
      hospital.name=name;
      hospital.email=email;
      hospital.city='ramallah';
      this.hospitalService.saveHospital(hospital);
    }if (type === 'donater') {
      let donator : DonaterModel = new DonaterModel();
      donator.phone=phone;
      donator.city='ramallah';
      donator.name=name;
      donator.gender=gender;
      donator.bloodType='AB';
      this.donaterService.saveDonater(donator);
      console.log('notidiot');
    }

  }
}
