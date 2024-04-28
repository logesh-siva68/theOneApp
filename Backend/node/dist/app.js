import express from "express";
import http from "http";
import mongoose from 'mongoose';
import 'dotenv/config';
import authUser from "./utils/authUser.js";
export class App {
    app;
    port = Number(process.env.PORT) || 3000;
    constructor(publicRoutes, securedRoutes) {
        this.app = express();
        this.app.use(express.json());
        this.initApp(publicRoutes, securedRoutes);
    }
    async initApp(publicRoutes, securedRoutes) {
        try {
            await mongoose.connect(process.env.MONGO_CONNECTION_URL);
            console.log('Connected to Mongo!');
            publicRoutes.forEach(element => {
                console.log(element);
                this.app.use(element.path, element.handler);
            });
            this.app.use(authUser);
            securedRoutes.forEach(element => {
                console.log(element);
                this.app.use(element.path, element.handler);
            });
        }
        catch (err) {
            throw err;
        }
    }
    createAndRunServer() {
        let server = http.createServer(this.app);
        server.listen(this.port, () => {
            console.log("app is running on ", this.port);
        });
    }
}
//# sourceMappingURL=app.js.map