import {HospitalModel} from './hospital.model';

export class RequestModel {
  id: number;
  hospital: HospitalModel;
  bloodType: string;
  quantity: string;
}
