"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_routes_1 = __importDefault(require("./admin.routes"));
const user_routes_1 = __importDefault(require("./user.routes"));
const patient_routes_1 = __importDefault(require("./patient.routes"));
const doctor_routes_1 = __importDefault(require("./doctor.routes"));
const updateTables_1 = require("../middlewares/updateTables");
const router = (0, express_1.Router)();
router.use(updateTables_1.updateTables);
router.use('/user', user_routes_1.default);
router.use('/admin', admin_routes_1.default);
router.use('/patient', patient_routes_1.default);
router.use('/doctor', doctor_routes_1.default);
exports.default = router;
