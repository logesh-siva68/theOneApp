import { Router } from 'express';
import authUser from '../utils/authUser.js';

const goalsRouter = Router();

goalsRouter.get('/verify', (req,res)=>{
    res.status(200).send()
})

export default goalsRouter;