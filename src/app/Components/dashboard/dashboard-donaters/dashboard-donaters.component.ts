import {Component, OnInit} from '@angular/core';
import {DonaterModel} from '../../../models/donater.model';
import {DonaterService} from '../../../Services/donater-service.service';

@Component({
  selector: 'app-dashboard-donaters',
  templateUrl: './dashboard-donaters.component.html',
  styleUrls: ['./dashboard-donaters.component.scss']
})
export class DashboardDonatersComponent implements OnInit {

  donaters: DonaterModel[]=[];

  constructor(private donaterService: DonaterService) {
  }

  ngOnInit() {
    this.donaterService.getDonaters().subscribe(data => {
      this.donaters = data;
    });
  }

}
