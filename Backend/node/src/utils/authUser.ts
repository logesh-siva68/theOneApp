import { NextFunction, Request, Response } from "express";
import { verifyToken } from "./jwt.js";

export default async function authUser(req:Request, res:Response, next:NextFunction) {
    try{
        let token = req.headers['authorization'];
        token = token.split('Bearer ')[1];
        let decode:any = await verifyToken(token, process.env.SALT_KEY);
        if(decode._doc){
            next()
        }
       
    }catch(err){
        console.log(err)
        res.status(404).json({message:"unauthorized user!!!"});}
}