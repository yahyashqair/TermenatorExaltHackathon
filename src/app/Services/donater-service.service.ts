import {Injectable, OnInit} from '@angular/core';
import {DonaterModel} from '../models/donater.model';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonaterService {
  donaterTemp: DonaterModel = new DonaterModel();
  donater: Subject<DonaterModel> = new Subject<DonaterModel>();
  getUser = 'https://termenatorexalthackathon.firebaseio.com/donaters/';
  getUsers = 'https://termenatorexalthackathon.firebaseio.com/donaters/';

  constructor(private http: HttpClient) {

  }

  public getDonater(id: number) {
    return this.http.get<DonaterModel>(this.getUser + id + '.json');
  }

  public getDonaters() {
    return this.http.get<DonaterModel[]>(this.getUser + '.json');
  }

  public setDonater(data: DonaterModel) {
    return this.http.put(this.getUser + data.id + '.json', data);
  }
  public saveDonater(data: DonaterModel) {
    return this.http.post<DonaterModel>(this.getUser + '.json', data);
  }

}
