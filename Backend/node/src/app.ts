import express, { Request, Response, Application } from 'express';
import { Route } from './interfaces/common.interface.js';
import http from 'http';
import mongoose from 'mongoose';
import cors from 'cors';
export class App {
    app: Application;
    port: Number = Number(process.env.PORT) || 3001;
    constructor(publicRoutes: Route[], securedRoutes: Route[]) {
        this.app = express();
        this.app.use(express.json());
        this.app.use(cors());
        this.initApp(publicRoutes, securedRoutes);
    }

    async initApp(publicRoutes, securedRoutes) {
        try {
            await mongoose.connect('mongodb://localhost:27017/goal');
            publicRoutes.forEach((element) => {
                this.app.use(element.path, element.handler);
            });
        } catch (err) {}
    }

    createAndRunServer() {
        let server = http.createServer(this.app);
        server.listen(this.port, () => {
            console.log('app is running on ', this.port);
        });
    }
}
