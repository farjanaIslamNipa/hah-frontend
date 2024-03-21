import {TSupplyCategory} from ".";

export type TDonation = {
  _id?: string;
  name:string;
  email:string;
  title: string;
  category: TSupplyCategory;
  quantity: number;
  description: string;
}

export type TDonationState = {
  supplies : null | TDonation
}
