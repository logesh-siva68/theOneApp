import express, {NextFunction, Request, Response, Router} from 'express';
import { loginLibrary } from '../lib/login.js';
import { registerValidation } from '../validations/login.validation.js';
const loginRouter = express.Router();

const login = new loginLibrary()

loginRouter.post('/register', registerValidation, login.register);



export default loginRouter;