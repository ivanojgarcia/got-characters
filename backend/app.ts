import 'reflect-metadata';
import './src/config/environtment';
import { createConnection, Connection } from 'typeorm'; 
import Server from './src/models/server';

const server = new Server();
createConnection()

server.listen();