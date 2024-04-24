import UserModel from "../models/user.models.js";
export class loginLibrary {
    constructor() {
    }
    async register(req, res) {
        try {
            let body = req.body;
            let user = new UserModel(body);
            await user.save();
            return res.status(200).json({ "status": 200, "data": req.body || [], "message": "user registered" });
        }
        catch (err) {
            console.log("Err", JSON.stringify(err));
            return res.status(500).json({ "status": 500, "message": "Something Went wrong" });
        }
    }
}
//# sourceMappingURL=login.js.map