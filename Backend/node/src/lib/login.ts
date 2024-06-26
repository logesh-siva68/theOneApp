import { Request, Response } from 'express';
import { registerBody } from '../interfaces/user.interface.js';
import UserModel from '../models/user.models.js';
import { signToken } from '../utils/jwt.js';
export class loginLibrary {
    constructor() {}

    public async register(req: Request, res: Response) {
        try {
            let body: registerBody = req.body;
            let user = new UserModel(body);
            await user.save();
            let tokenPayload: any = { ...user };
            tokenPayload._id = user._id.toString();
            const token = signToken(tokenPayload, process.env.SALT_KEY);
            res.setHeader('Authorization', `Bearer ${token}`);
            return res.status(200).json({
                status: 200,
                data: user || [],
                message: 'user registered',
            });
        } catch (err) {
            console.log(err);
            if (err?.errorResponse?.code === 11000)
                return res.status(400).json({
                    status: 400,
                    message:
                        err.errorResponse.errmsg ||
                        'The Mobile Number / Email is already registered!! plz use different one!',
                });
            return res
                .status(500)
                .json({ status: 500, message: 'Something Went wrong' });
        }
    }

    public async login(req: Request, res: Response) {
        try {
            let user = await UserModel.findOne({
                mobileNumber: req.body.mobileNumber,
                password: req.body.password,
            });
            console.log('user', user);
            if (user) {
                let tokenPayload: any = { ...user };
                tokenPayload._id = user._id.toString();
                const token = signToken(tokenPayload, process.env.SALT_KEY);
                res.setHeader('Authorization', `Bearer ${token}`);
                return res
                    .status(200)
                    .json({ status: 200, message: 'Login Success' });
            } else {
                return res.status(400).json({
                    status: 400,
                    message: 'Invalid mobile number  or password',
                });
            }
        } catch (err) {
            console.log(err);
            if (err?.errorResponse?.code === 11000)
                return res.status(400).json({
                    status: 400,
                    message:
                        'The Mobile Number is already registered!! plz use different one!',
                });
            return res
                .status(500)
                .json({ status: 500, message: 'Something Went wrong' });
        }
    }
}
