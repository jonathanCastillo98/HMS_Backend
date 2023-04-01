import express, { Request, Response } from 'express';
import router from './routes';
const cors = require("cors")

const app = express();

// Middlewares
app.use(express.json())
app.use('/', router);
app.use(cors)


export default app;