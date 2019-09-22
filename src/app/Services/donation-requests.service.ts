import {Injectable} from '@angular/core';
import {RequestModel} from '../models/request.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonationRequestsService {
  private requestModels: RequestModel[] = [];
  requestUrl = 'https://my-json-server.typicode.com/yahyashqair/demo/requests';

  constructor(private http: HttpClient) {
  }
  getRequests() {
    return this.http.get<RequestModel[]>(this.requestUrl);
  }
}
