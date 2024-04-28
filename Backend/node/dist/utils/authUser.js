import { verifyToken } from "./jwt.js";
export default async function authUser(req, res, next) {
    try {
        let token = req.headers['authorization'];
        token = token.split('Bearer ')[1];
        let decode = await verifyToken(token, process.env.SALT_KEY);
        if (decode._doc) {
            next();
        }
    }
    catch (err) {
        console.log(err);
        res.status(404).json({ message: "unauthorized user!!!" });
    }
}
//# sourceMappingURL=authUser.js.map