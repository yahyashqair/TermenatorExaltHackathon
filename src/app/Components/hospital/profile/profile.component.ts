import {Component, OnInit} from '@angular/core';
import {HospitalModel} from 'src/app/models/hospital.model';
import {HospitalService} from 'src/app/Services/hospital.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  hospital: HospitalModel = new HospitalModel();

  constructor(private hospitalService: HospitalService) {
  }

  ngOnInit() {
    this.hospitalService.getHospital(0).subscribe(data => {
      this.hospital = data;
    });
  }

}
