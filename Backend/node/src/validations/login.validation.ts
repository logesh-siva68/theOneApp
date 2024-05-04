import Joi from 'joi';
import { registerBody } from '../interfaces/user.interface.js';
import { NextFunction, Request, Response } from 'express';

function registerValidation(req: Request, res: Response, next: NextFunction) {
    let schema = Joi.object({
        name: Joi.string().required().messages({
            'any.required': 'name is required. Please provide a name.',
            'string.empty': 'name must not be empty. Please provide a name.',
        }),
        mobileNumber: Joi.number().required(),
        countryCode: Joi.string().required(),
        dob: Joi.date(),
        password: Joi.string()
            .required()
            .messages({
                'any.required':
                    'password is required. Please provide a password.',
                'string.empty':
                    'password must not be empty. Please provide a password.',
            })
            .pattern(
                new RegExp(
                    '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
                )
            )
            .message(
                'Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long.'
            ),
    });
    let body: registerBody = req.body;
    // console.log(schema.validate(body).error)
    const { error, value } = schema.validate(body);
    if (error?.details)
        return res.status(400).json({
            status: 400,
            message: error?.details[0]?.message?.replaceAll('"', ''),
        });
    next();
}

function loginValidation(req: Request, res: Response, next: NextFunction) {
    let schema = Joi.object({
        mobileNumber: Joi.number().required(),
        countryCode: Joi.string().required(),
        password: Joi.string()
            .required()
            .messages({
                'any.required':
                    'password is required. Please provide a password.',
                'string.empty':
                    'password must not be empty. Please provide a password.',
            })
            .pattern(
                new RegExp(
                    '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
                )
            )
            .message(
                'Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long.'
            ),
    });
    let body: registerBody = req.body;
    // console.log(schema.validate(body).error)
    const { error, value } = schema.validate(body);
    if (error?.details)
        return res.status(400).json({
            status: 400,
            message: error?.details[0]?.message?.replaceAll('"', ''),
        });
    next();
}

export { registerValidation, loginValidation };
