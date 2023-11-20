import { IUser } from '../interfaces/user.interface';
import { User } from '../models/user.model';

//create user
const createUser = async (userData: IUser): Promise<IUser | null> => {
  const result = await User.create(userData);
  return result;
};

// get single user by id
const getUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findById(id);
  return result;
};
// get All users
const getUsers = async (): Promise<IUser[] | null> => {
  const result = await User.find({});
  return result;
};
//update user by id
const updateUser = async (
  id: string,
  data: Partial<IUser>,
): Promise<IUser | null> => {
  const result = await User.findByIdAndUpdate(id, data, { new: true });
  return result;
};

// delete user by id
const deletUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

export const UserServices = {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deletUser,
};
