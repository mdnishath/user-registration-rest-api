import { Model } from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  password: string;
  role?: 'user' | 'admin';
  isActive?: boolean;
}

export interface IUserModel extends Model<IUser> {}
