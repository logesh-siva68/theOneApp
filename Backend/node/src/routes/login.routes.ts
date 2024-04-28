import { Router } from 'express';
import { loginLibrary } from '../lib/login.js';
import { loginValidation, registerValidation } from '../validations/login.validation.js';
import { log } from 'console';
const loginRouter = Router();

const login = new loginLibrary()

loginRouter.post('/register', registerValidation, login.register);
loginRouter.post('/login', loginValidation, login.login);



export default loginRouter;