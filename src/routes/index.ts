import { Router } from 'express';
import adminRoutes from './admin.routes';
import userRoutes from './user.routes';
import patientRoutes from './patient.routes';
import doctorRoutes from './doctor.routes';
import { updateTables } from '../middlewares/updateTables';

const router = Router();

router.use(updateTables)

router.use('/user', userRoutes);
router.use('/admin', adminRoutes);
router.use('/patient', patientRoutes);
router.use('/doctor', doctorRoutes);

export default router;
