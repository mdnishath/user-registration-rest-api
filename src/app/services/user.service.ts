import { IUser } from '../interfaces/user.interface';
import { User } from '../models/user.model';

//create user
const createUser = async (userData: IUser): Promise<IUser | null> => {
  const result = await User.create(userData);

  return result;
};

export const UserServices = {
  createUser,
};
