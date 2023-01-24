import { IPets } from "./IPets";
import { ISecOwn } from "./ISecOwn";

export interface IOwners {
  _id: string;
  firstname: string;
  lastname: string;
  useremail: string;
  phone: number;
  address: string;
  city: string;
  zip: number;
  pets: IPets[];
  secondOwenrs: ISecOwn[];
}
