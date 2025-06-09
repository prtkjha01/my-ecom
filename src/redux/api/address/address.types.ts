export interface Address {
  _id: string;
  name: string;
  mobile: string;
  address_line_1: string;
  address_line_2?: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  type: "HOME" | "OFFICE";
}
