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
  getUser = 'https://my-json-server.typicode.com/yahyashqair/demo/donaters/';
  getUsers = 'https://my-json-server.typicode.com/yahyashqair/demo/donaters/';

  constructor(private http: HttpClient) {

  }

  public getDonater(id: number) {
    return this.http.get<DonaterModel>(this.getUser +  id);
  }

  public getDonaters() {
   return this.http.get<DonaterModel>(this.getUser);
  }


}
