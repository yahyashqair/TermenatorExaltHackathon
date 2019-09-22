import { Component, OnInit } from '@angular/core';
import { HospitalModel } from 'src/app/models/hospital.model';
import {DonaterModel} from '../../../models/donater.model';
import {DonaterService} from '../../../Services/donater-service.service';
import {HospitalService} from '../../../Services/hospital.service';

@Component({
  selector: 'app-dashboard-hospitals',
  templateUrl: './dashboard-hospitals.component.html',
  styleUrls: ['./dashboard-hospitals.component.scss']
})
export class DashboardHospitalsComponent implements OnInit {

  hospitals: HospitalModel[]=[];

  constructor(private hospitalService: HospitalService) {
  }

  ngOnInit() {
    this.hospitalService.getHospitals().subscribe(data => {
      this.hospitals = data;
    });
  }

}
