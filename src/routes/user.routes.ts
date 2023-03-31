import { Router } from 'express';
import controllers from '../controllers';
import { isAuthenticated } from '../middlewares/isAuthenticated';

const userRoutes = Router();
const { userController } = controllers;

userRoutes.post('/signup', userController.createUser);
userRoutes.put('/disableaccount', isAuthenticated, userController.disableAccount)


export default userRoutes;