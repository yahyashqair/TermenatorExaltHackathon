import {Injectable} from '@angular/core';
import {DonaterModel} from '../models/donater.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  getHospitalurl = 'https://my-json-server.typicode.com/yahyashqair/demo/hospital/';

  constructor(private http: HttpClient) {
  }


  public getHospital(id: number) {
    return this.http.get<DonaterModel>(this.getHospitalurl + id);
  }

  public getHospitals() {
    return this.http.get<DonaterModel>(this.getHospitalurl);
  }
}
