//user name interface
export interface IName {
  firstName: string;
  middleName: string;
  lastName: string;
}
//contact interface
export interface IContact {
  email: string;
  phone: string;
  website?: string;
  facebook?: string;
}

//Addresses interface
export interface IAddress {
  street: string;
  city: string;
  state: string;
  country: string;
}

//main User interface
export interface IUser {
  name: IName;
  gender: 'male' | 'female' | 'other';
  dateOfBirth: string;
  contact: IContact;
  address: IAddress;
  role?: 'user' | 'admin' | 'superadmin';
  isActive: boolean;
}
