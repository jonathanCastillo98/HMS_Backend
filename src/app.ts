import express, { Request, Response } from 'express';
import router from './routes';
const cors = require("cors")

const app = express();

// Middlewares
app.use(express.json())
app.use(cors)
app.use('/', router);

export default app;