import {Injectable} from '@angular/core';
import {DonaterModel} from '../models/donater.model';
import {HttpClient} from '@angular/common/http';
import {HospitalModel} from '../models/hospital.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  getHospitalurl = 'https://termenatorexalthackathon.firebaseio.com/hospital/';

  constructor(private http: HttpClient) {
  }


  public getHospital(id: number) {
    return this.http.get<HospitalModel>(this.getHospitalurl + id + '.json');
  }

  public getHospitals() {
    return this.http.get<HospitalModel>(this.getHospitalurl + '.json');
  }


  public setHospital(data: HospitalModel) {
    return this.http.put(this.getHospitalurl + data.id + '.json', data);
  }

  public saveHospital(data: HospitalModel) {
    return this.http.post<HospitalModel>(this.getHospitalurl + '.json', data);
    console.log(data);
  }

}
