import {Component, OnInit} from '@angular/core';
import {RequestModel} from '../../models/request.model';
import {DonationRequestsService} from '../../Services/donation-requests.service';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-donation-requests',
  templateUrl: './donation-requests.component.html',
  styleUrls: ['./donation-requests.component.scss']
})
export class DonationRequestsComponent implements OnInit {

  constructor(private requestService: DonationRequestsService) {
  }

  private requests: RequestModel[];
  selectedRequest: RequestModel;

  displayDialog: boolean;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  ngOnInit() {
    this.requestService.getRequests().subscribe(data => {
      this.requests = data;
    });
  }


}
