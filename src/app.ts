import express, { NextFunction, Request, Response } from 'express';
//import routes from './routes';

const app = express();
app.use(express.json());

export { app };