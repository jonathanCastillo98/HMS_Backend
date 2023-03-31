import { Router } from 'express';
import controllers from '../controllers';
import { existPatient, existAppointment } from '../middlewares/existEntity';
import { isAuthenticated } from '../middlewares/isAuthenticated';
import { isAuthorized } from '../middlewares/isAuthorized';

const patientRoutes = Router();
const { patientController } = controllers;

patientRoutes.use(isAuthenticated, isAuthorized({ roles: ['patient'], allowSameUser: true }), existPatient);

patientRoutes.post('/', existAppointment, patientController.createAppointment);
patientRoutes.get('/:id', existAppointment, patientController.getAppointmentById);
patientRoutes.get('/', patientController.getAllPatientAppointments);
patientRoutes.put('/:id', existAppointment, patientController.deleteAppointment);

export default patientRoutes;