import { Schema, model } from 'mongoose';
import { IAddress, IContact, IName, IUser } from '../interfaces/user.interface';

// Define the Name schema
const nameSchema = new Schema<IName>({
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
});

// Define the Contact schema
const contactSchema = new Schema<IContact>({
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  website: { type: String },
  facebook: { type: String },
});

// Define the Address schema
const addressSchema = new Schema<IAddress>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
});

// Define the User schema
const userSchema = new Schema<IUser>({
  name: { type: nameSchema, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  dateOfBirth: { type: String, required: true },
  contact: { type: contactSchema, required: true },
  address: { type: addressSchema, required: true },
  role: { type: String, enum: ['user', 'admin', 'superadmin'] },
  isActive: { type: Boolean, required: true },
});

// Create the User model
export const User = model('User', userSchema);
