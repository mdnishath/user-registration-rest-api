import express from 'express';
import { UserControlers } from '../controllers/user.controller';
const router = express.Router();

//Will call a controler function
router.post('/create-user', UserControlers.createUser);
router.get('/', UserControlers.getUsers);
router.get('/:id', UserControlers.getUser);
router.patch('/:id', UserControlers.updateUser);
router.delete('/:id', UserControlers.deleteUser);

export const UserRoutes = router;
