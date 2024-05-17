import mongoose, { Model } from 'mongoose';
let UserSchema = new mongoose.Schema(
    {
        name: String,
        mobileNumber: { unique: true, type: Number },
        email: { unique: true, type: String },
        countryCode: String,
        dob: Date,
        password: String,
    },
    { collection: 'user' }
);

UserSchema.index({ mobileNumber: 1 });
let UserModel = mongoose.model('User', UserSchema);
export default UserModel;
