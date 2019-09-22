import {Injectable} from '@angular/core';
import {RequestModel} from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class DonationRequestsService {
  private requestModels: RequestModel[] = [];

  constructor() {
  }

  getDate(): RequestModel[] {
    this.requestModels.push(new RequestModel(null, 'cc', 'ff', 'vv'));
    this.requestModels.push(new RequestModel(null, 'cc2', 'ff2', 'vv2'));
    this.requestModels.push(new RequestModel(null, 'cc3', 'ff3', 'vv3'));
    return this.requestModels;
  }
}
