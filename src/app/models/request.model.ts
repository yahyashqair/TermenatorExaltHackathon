import {HospitalModel} from './hospital.model';

export class RequestModel {
  constructor(hospital: HospitalModel, msg: string, bloodType: string, value: string) {
    this.hospital = hospital;
    this.msg = msg;
    this.bloodType = bloodType;
    this.value = value;
  }

  hospital: HospitalModel;
  id: number;
  msg: string;
  bloodType: string;
  value: string;

}
