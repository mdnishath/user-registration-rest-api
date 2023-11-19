import { Request, Response } from 'express';
import { UserServices } from '../services/user.service';
import { userVelidation } from '../validations/userValidation';
const createUser = async (req: Request, res: Response) => {
  try {
    //get request data
    const { user } = await req.body;
    const validatedUserData = userVelidation.parse(user);
    // console.log(validatedUserData);

    //call the user service
    const result = await UserServices.createUser(validatedUserData);
    //responscess the request
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (error: any) {
    // console.log(error);
    res.status(500).json({
      success: true,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

export const UserControlers = {
  createUser,
};
