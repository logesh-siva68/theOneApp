import express, { Request, Response, Application } from "express";
import {Route} from "./interfaces/common.interface.js";
import http from "http";
import mongoose from 'mongoose';


export class App{
    app:Application;
    port:Number = 3000;
    constructor(publicRoutes:Route[],securedRoutes:Route[]){
        this.app = express();
        this.app.use(express.json());
        this.initApp(publicRoutes,securedRoutes);
    }

    async initApp(publicRoutes, securedRoutes){
        try{
            let connection = mongoose.connect('mongodb://localhost:27017/goal');
            connection.then(data=>{console.log('Connected to Mongo!');})
            // console.log('Connected to Mongo!', connection);
            publicRoutes.forEach(element => {
                this.app.use(element.path, element.handler);
            });
        }catch(err){

        }
       
    }

    createAndRunServer(){
        let server = http.createServer(this.app)
        server.listen(this.port, ()=>{
            console.log("app is running on ", this.port);
        })
    }
}