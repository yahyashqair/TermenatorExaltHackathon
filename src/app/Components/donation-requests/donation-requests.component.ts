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
    this.requests = this.requestService.getDate();
    this.sortOptions = [
      {label: 'Newest First', value: '!id'},
      {label: 'Oldest First', value: 'id'}];
  }

  selectRequest(event: Event, request: RequestModel) {
    this.selectedRequest = request;
    this.displayDialog = true;
    event.preventDefault();
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
  onDialogHide() {
    this.selectedRequest = null;
  }

}
