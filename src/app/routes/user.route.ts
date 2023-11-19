import express from 'express';
import { UserControlers } from '../controllers/user.controller';
const router = express.Router();

//Will call a controler function
router.post('/create-user', UserControlers.createUser);

export const UserRoutes = router;
