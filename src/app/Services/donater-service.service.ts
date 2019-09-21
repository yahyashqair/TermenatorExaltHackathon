import {Injectable, OnInit} from '@angular/core';
import {DonaterModel} from '../models/donater.model';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonaterService {
  donaterTemp: DonaterModel = new DonaterModel();
  donater: Subject<DonaterModel> = new Subject<DonaterModel>();

  constructor() {

  }

  public getDonater() {
    console.log('Hello from service');
    this.donaterTemp = new DonaterModel();
    this.donaterTemp.name = 'yahya';
    this.donaterTemp.DOB = new Date(11, 22, 22);
    this.donaterTemp.name = 'yahya';
    console.log(this.donaterTemp);
    // setTimeout(() => {

    this.donater.next(this.donaterTemp);
    // }, 5000);
    console.log(this.donater);
    // return this.donater;
  }


}
