import {Injectable} from '@angular/core';
import {RequestModel} from '../models/request.model';
import {HttpClient} from '@angular/common/http';
import {HospitalModel} from '../models/hospital.model';

@Injectable({
  providedIn: 'root'
})
export class DonationRequestsService {
  private requestModels: RequestModel[] = [];
  requestUrl = 'https://termenatorexalthackathon.firebaseio.com/requests';

  constructor(private http: HttpClient) {
  }

  getRequests() {
    return this.http.get<RequestModel[]>(this.requestUrl + '.json');
  }
  public addRequest(data: RequestModel) {
    return this.http.put<RequestModel>(this.requestUrl + '.json', data);
  }

}
