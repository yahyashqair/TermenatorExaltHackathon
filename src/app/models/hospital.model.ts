export class HospitalModel {
  email: string;
  name: string;
  country: string;
  city: string;
  area: string;
  phoneNumber: string;
  types: Storage[];
}

export class Storage {
  type: string;
  count: number;
}
