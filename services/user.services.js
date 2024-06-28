const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken");


class UserService{
    static async registerUser(email, password, phoneNumber)
    {
        try
        {
            const createUser = new userModel({email, password, phoneNumber});
            return await createUser.save();
        }
        catch(err)
        {
            throw err;
        }
    }
    static async checkUserEmail(email)
    {
        try
        { 
            return await userModel.findOne({email});
        }
        catch(err)
        {
            throw err;
        }
    }
    static async checkUserPhoneNumber(phoneNumber)
    {
        try
        {
            return await userModel.findOne({phoneNumber});
        }
        catch(err)
        {
            throw err;
        }
    }
    static async generateToken(tokenData, secretKey, jwt_expire)
    {
        return jwt.sign(tokenData, secretKey, {expiresIn: jwt_expire});
    }
} 

module.exports = UserService;