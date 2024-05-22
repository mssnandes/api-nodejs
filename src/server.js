import express from "express";
import mainRoutes from './routes/main.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const server = express();
server.use(cors());

server.use(express.json())

server.use(mainRoutes);

server.listen(process.env.PORT);