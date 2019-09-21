export interface HospitalModel {
  name: string;
  address: string;
  phoneNumber: string;
  types: Storage[];
}
export interface Storage {
  type: string;
  count: number;
}
