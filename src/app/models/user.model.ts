import { Schema, model } from 'mongoose';
import { IUser, IUserModel } from '../interfaces/user.interface';
import bcrypt from 'bcrypt';

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true, // Ensure email is stored in lowercase
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

// hasing the password
userSchema.pre('save', async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error: any) {
    return next(error);
  }
});

// Mongoose pre-findOneAndUpdate middleware to hash the password before updating
userSchema.pre('findOneAndUpdate', async function (this: any, next) {
  try {
    // console.log('Pre Middleware ===>', this._update);
    this._update.password = await bcrypt.hash(this._update.password, 10);
    next();
  } catch (error: any) {
    return next(error);
  }
});
// Create the User model
export const User = model<IUser, IUserModel>('User', userSchema);
