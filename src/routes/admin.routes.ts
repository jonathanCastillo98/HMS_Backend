import { Router } from 'express';
import controllers from '../controllers';
import { isAuthenticated } from '../middlewares/isAuthenticated';
import { isAuthorized } from '../middlewares/isAuthorized';

const adminRoutes = Router();
const { adminController } = controllers;

adminRoutes.use(isAuthenticated, isAuthorized({ roles: ['admin'], allowSameUser: true }));

adminRoutes.post('/doctors', adminController.createDoctor);
adminRoutes.put('/users/:uid', adminController.changeIsDisabled);
adminRoutes.get('/appointments', adminController.getAllAppointments);

export default adminRoutes;