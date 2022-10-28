import 'reflect-metadata';
import 'dotenv/config';
import { app } from './app';
import { AppDataSource } from './database/data-source';

const port = process.env.APP_PORT || 3001

AppDataSource.initialize().then(() => {
  const server = app.listen(port, () => {
    return console.log(`Server started on port ${process.env.APP_PORT}! 🏆`);
  });
});