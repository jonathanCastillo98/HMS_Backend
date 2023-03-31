"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("../controllers"));
const isAuthenticated_1 = require("../middlewares/isAuthenticated");
const userRoutes = (0, express_1.Router)();
const { userController } = controllers_1.default;
userRoutes.post('/signup', userController.createUser);
userRoutes.put('/disableaccount', isAuthenticated_1.isAuthenticated, userController.disableAccount);
exports.default = userRoutes;
