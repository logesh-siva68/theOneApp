import mongoose, { Model } from 'mongoose'
let UserSchema = new mongoose.Schema({
    name: String,
    mobileNumber:{unique: true, type:Number}, 
    countryCode:String,
    dob:Date,
    password:String
});

UserSchema.index({ mobileNumber: 1 })
let UserModel = mongoose.model('User',UserSchema);
export default  UserModel;