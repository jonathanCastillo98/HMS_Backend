import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from "sequelize";
import { sequelize } from '../database/connection'

export class Patient extends Model<InferAttributes<Patient>, InferCreationAttributes<Patient>> {
    declare patient_id: CreationOptional<number>;
    declare user_id: string;

}

Patient.init(
    {
        patient_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        tableName: "patients",
        sequelize: sequelize
    }
);
