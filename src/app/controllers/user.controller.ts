import { Request, Response } from 'express';
import { UserServices } from '../services/user.service';
import { userVelidation } from '../validations/userValidation';
const createUser = async (req: Request, res: Response) => {
  try {
    //get request data
    const { user } = await req.body;
    const validatedUserData = userVelidation.parse(user);
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

//get user
const getUser = async (req: Request, res: Response) => {
  try {
    //get request data
    const { id } = req.params;
    //call the user service
    const result = await UserServices.getUser(id);
    //responscess the request
    res.status(201).json({
      success: true,
      message: 'User retrived successfully',
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
//get user
const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getUsers();
    //responscess the request
    res.status(201).json({
      success: true,
      message: 'Users retrived successfully',
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
//Update user
const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await req.body;
    const result = await UserServices.updateUser(id, data);
    //responscess the request
    res.status(201).json({
      success: true,
      message: 'User updated successfully',
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
//delete user bu id
const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await UserServices.deletUser(id);
    //responscess the request
    res.status(201).json({
      success: true,
      message: 'User deleted successfully',
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
  getUser,
  getUsers,
  updateUser,
  deleteUser,
};
