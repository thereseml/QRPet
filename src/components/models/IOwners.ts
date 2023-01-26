import { IPetsId } from "./IPetsId";

export interface IOwners {
  _id: string;
  firstname: string;
  lastname: string;
  useremail: string;
  phone: number;
  address: string;
  city: string;
  zip: number;
}
