import {Component, OnInit} from '@angular/core';
import {DonationRequestsService} from '../../../Services/donation-requests.service';
import {RequestModel} from '../../../models/request.model';

@Component({
  selector: 'app-request-donation',
  templateUrl: './request-donation.component.html',
  styleUrls: ['./request-donation.component.scss']
})
export class RequestDonationComponent implements OnInit {

  constructor(private requestService: DonationRequestsService) {
  }

  ngOnInit() {
  }

  submit(type: string, R: string, quantity: string) {
    const request: RequestModel = new RequestModel();
    request.bloodType = type;
    request.hospital = null;
    request.quantity = quantity;
    this.requestService.addRequest(request).subscribe(data => {
      alert('add Successfully' + data);
    }, err => {
      alert('Error');
    });
  }

}
