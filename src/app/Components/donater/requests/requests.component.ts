import { Component, OnInit } from '@angular/core';
import { DonationRequestsService } from 'src/app/Services/donation-requests.service';
import { RequestModel } from 'src/app/models/request.model';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {
  private requests: RequestModel[];
  selectedRequest: RequestModel;

  constructor(private requestService: DonationRequestsService) {
  }

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
