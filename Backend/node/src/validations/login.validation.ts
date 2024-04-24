import Joi from "joi";
import { registerBody } from '../interfaces/user.interface.js';
import { NextFunction, Request, Response } from "express";

export function registerValidation(req:Request,res:Response, next:NextFunction){
    let schema = Joi.object({
        name: Joi.string().required(),
        mobileNumber:Joi.number().required(),
        countryCode:Joi.string().required(),
        dob:Joi.date() 
    });
    let body:registerBody = req.body;
    // console.log(schema.validate(body).error)
    const {error, value} = schema.validate(body);
    if(error?.details) return res.status(400).json({status:400, message: error?.details[0]?.message?.replaceAll('\"',"")})
    next();
}