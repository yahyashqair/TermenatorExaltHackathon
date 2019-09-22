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
    this.authService.signUp(email, password);
    if (type == 'hospital') {
      let hospital : HospitalModel = new HospitalModel();
      hospital.
      this.hospitalService.saveHospital(hospital);
    }else{

    }

  }
}
