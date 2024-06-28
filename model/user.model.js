const mongoose = require("mongoose");
const bcrypt = require("bcrypt");   
const dotenv = require("dotenv").config();

const db = require("../config/db");

const { Schema } = mongoose;
const rounds = process.env.ROUNDS;

const userSchema = new Schema({
    email:{
        type:String,
        lowercase:true,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    }
});

userSchema.pre('save', async function()
{
    try
    {
        const user = this;
        const salt = await(bcrypt.genSalt(Number(rounds))); 
        const hashpass = await bcrypt.hash(user.password, salt);

        user.password = hashpass;
    }
    catch (err)
    {
        throw err;
    }
});

userSchema.methods.comparePassword = async function(userPassword)
{
    try
    {
        const isMatch = await bcrypt.compare(userPassword, this.password);
        return isMatch;
    }
    catch (err)
    {
        throw err;
    }

}
const userModel = db.model("user", userSchema);

module.exports = userModel; 