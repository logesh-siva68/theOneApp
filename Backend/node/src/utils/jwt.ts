import jwt from 'jsonwebtoken';

function signToken(payload, saltKey){
    try{
        return jwt.sign(payload,saltKey, {expiresIn:'1h'})
    }catch(err){
        throw err;
    }
}

function verifyToken(token, saltKey){
    try{
        return jwt.verify(token,saltKey);
    }catch(err){
        throw err;
    }
}

export {signToken, verifyToken}