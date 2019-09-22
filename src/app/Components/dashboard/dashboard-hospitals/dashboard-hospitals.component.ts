import { Component, OnInit } from '@angular/core';
import { HospitalModel } from 'src/app/models/hospital.model';

@Component({
  selector: 'app-dashboard-hospitals',
  templateUrl: './dashboard-hospitals.component.html',
  styleUrls: ['./dashboard-hospitals.component.scss']
})
export class DashboardHospitalsComponent implements OnInit {
  hospitals: HospitalModel[] = [];

  constructor() { }

  ngOnInit() {
  }

}
