import { Component, OnInit } from '@angular/core';
import { DonationRequestsService } from 'src/app/Services/donation-requests.service';
import { RequestModel } from 'src/app/models/request.model';
import { SelectItem } from 'primeng/api';
import { DonaterModel } from 'src/app/models/donater.model';
import { DonaterService } from 'src/app/Services/donater-service.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

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