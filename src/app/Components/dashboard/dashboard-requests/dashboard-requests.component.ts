import {Component, OnInit} from '@angular/core';
import {DonaterModel} from '../../../models/donater.model';
import {DonaterService} from '../../../Services/donater-service.service';
import {RequestModel} from '../../../models/request.model';
import {DonationRequestsService} from '../../../Services/donation-requests.service';

@Component({
  selector: 'app-dashboard-requests',
  templateUrl: './dashboard-requests.component.html',
  styleUrls: ['./dashboard-requests.component.scss']
})
export class DashboardRequestsComponent implements OnInit {

  requests: RequestModel[] = [];

  constructor(private requestService: DonationRequestsService) {
  }

  ngOnInit() {
    this.requestService.getRequests().subscribe(data => {
      Object.keys(data).forEach((key) => {
        this.requests.push(data[key]);
      });
      console.log(data);
    });
  }
}
