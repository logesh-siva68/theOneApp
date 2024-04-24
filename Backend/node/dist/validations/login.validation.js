import Joi from "joi";
export function registerValidation(req, res, next) {
    let schema = Joi.object({
        name: Joi.string().required(),
        mobileNumber: Joi.number().required(),
        countryCode: Joi.string().required(),
        dob: Joi.date()
    });
    let body = req.body;
    // console.log(schema.validate(body).error)
    const { error, value } = schema.validate(body);
    if (error?.details)
        return res.status(400).json({ status: 400, message: error?.details[0]?.message?.replaceAll('\"', "") });
    next();
}
//# sourceMappingURL=login.validation.js.map