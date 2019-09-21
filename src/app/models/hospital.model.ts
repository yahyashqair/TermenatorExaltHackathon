export class HospitalModel {
  name: string;
  address: string;
  phoneNumber: string;
  types: Storage[];
}
export class Storage {
  type: string;
  count: number;
}
