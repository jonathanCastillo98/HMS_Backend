import { Patient } from "../models/patient.model";
import { Doctor } from "../models/doctor.model";
import { Admin } from "../models/admin.model";
import { getAllUsers, createUser } from "../firebase";
import { Request, Response } from "express";


export const updateTables = async (req: Request, res: Response, next: Function) => {
    try {
        const fireUsers = await getAllUsers();
        const patienUsers = await Patient.findAll();
        const parsedPatienUsers = patienUsers.map(patientUser => patientUser.toJSON());
        const doctorUsers = await Doctor.findAll();
        const parsedDoctorUsers = doctorUsers.map(doctorUsers => doctorUsers.toJSON());
        const adminUsers = await Admin.findAll();
        const parsedAdminUsers = adminUsers.map(adminUsers => adminUsers.toJSON());

        const patientNotInFire = parsedPatienUsers.filter(patient => !fireUsers.find(firePatient => firePatient.uid === patient.user_id));
        const doctorNotInFire = parsedDoctorUsers.filter(doctor => !fireUsers.find(fireDoctor => fireDoctor.uid === doctor.user_id));
        const adminNotInFire = parsedAdminUsers.filter(admin => !fireUsers.find(fireAdmin => fireAdmin.uid === admin.user_id));

        if (patientNotInFire) {
            patientNotInFire.forEach(async patient => {
                await Patient.destroy({
                    where: {
                        user_id: patient.user_id
                    }
                })
            })
        } else if (doctorNotInFire) {
            doctorNotInFire.forEach(async doctor => {
                await Doctor.destroy({
                    where: {
                        user_id: doctor.user_id
                    }
                })
            })
        } else if (adminNotInFire) {
            adminNotInFire.forEach(async admin => {
                await Admin.destroy({
                    where: {
                        user_id: admin.user_id
                    }
                })
            })
        }


        console.log("All tables are sync")
        return next();
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Something went wrong!" })
    }
}


export const createAdmin = async (displayName: string, email: string, pswrd: string) => {
    try {

        const userList = await getAllUsers();
        let user = userList.find((user) => {
            return user.email === email
        });

        if (user) {
            console.log("The user already exists")
        } else {
            const userId = await createUser(displayName, email, pswrd, "admin");
            const admin = Admin.create({ user_id: userId })
            return admin;
        }


    } catch (error) {

        console.error(error);

        return null

    }

}