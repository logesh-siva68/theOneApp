import { Request, Response } from "express";
import { registerBody } from "../interfaces/user.interface.js";
import UserModel from "../models/user.models.js";
export class loginLibrary{
    constructor(){

    }

    public async register(req:Request,res:Response){
        try{
            let body:registerBody = req.body;
            let user = new UserModel(body);
            await user.save();
            return  res.status(200).json({"status":200, "data":req.body || [], "message":"user registered"});
        }catch(err){
            console.log("Err",JSON.stringify(err))
            return res.status(500).json({"status":500, "message":"Something Went wrong"});
        }
    }
}   