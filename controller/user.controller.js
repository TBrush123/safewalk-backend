const UserService = require("../services/user.services");

exports.register = async(req, res, next) => {
    try
    {
        const {email, password} = req.body;

        const sucessRes = await UserService.registerUser(email, password);

        res.json({status:true, succes:"User registered successfully"})
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: "Couldn't register user"});
    }
}

exports.login = async(req, res, next) => {
    try
    {
        const {email, password} = req.body;
        
        const user = await UserService.checkUser(email);

        if (!user)
            {
                res.status(400).json({error: "No such user was found"});
                return
            }
        
        const isMatch = await user.comparePassword(password);

        if (isMatch === false)
            {
                res.status(400).json({error: "Invalid password"});
                return
            }
        let tokenData = {_id: user._id, email: user.email};

        const token = await UserService.generateToken(tokenData, "secretKey", "1h");

        res.status(200).json({status: true, token:token});
    }
    catch (err)
    {
        throw err;
    }
}