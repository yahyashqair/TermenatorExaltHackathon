import {Component, OnInit} from '@angular/core';
import {RequestModel} from '../../models/request.model';
import {DonationRequestsService} from '../../Services/donation-requests.service';
import {SelectItem} from 'primeng/api';
import {DonaterModel} from '../../models/donater.model';
import {DonaterService} from '../../Services/donater-service.service';

@Component({
  selector: 'app-donation-requests',
  templateUrl: './donation-requests.component.html',
  styleUrls: ['./donation-requests.component.scss']
})
export class DonationRequestsComponent implements OnInit {

  constructor(private requestService: DonationRequestsService, private donaterService: DonaterService) {
  }

  private requests: RequestModel[];
  private donater: DonaterModel;
  selectedRequest: RequestModel;

  displayDialog: boolean;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  ngOnInit() {
    this.requestService.getRequests().subscribe(data => {
      const id = localStorage.getItem('donater');
      this.donaterService.getDonater(Number(id)).subscribe(res => {
        this.donater = res;
      });
      for (const e of data) {
        if (e.bloodType === this.donater.bloodType) {
          this.requests.push(e);
        }
      }
    });
  }


}
