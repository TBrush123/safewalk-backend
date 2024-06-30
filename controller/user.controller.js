const UserService = require("../services/user.services");

exports.register = async (req, res, next) => {
  try {
    const { email, password, phoneNumber } = req.body;

    const userCheck1 = await UserService.checkUserEmail(email);
    const userCheck2 = await UserService.checkUserPhoneNumber(phoneNumber);

    if (!userCheck1 && !userCheck2) {
      const sucessRes = await UserService.registerUser(
        email,
        password,
        phoneNumber
      );
      res.json({ status: true, succes: "User registered successfully" });
      return;
    }
    res.status(400).json({ error: "This user is already registered" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Couldn't register user" });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password, phoneNumber } = req.body;

    const userCheck1 = await UserService.checkUserEmail(email);

    if (!userCheck1) {
      res.status(400).json({ error: "No such user was found" });
      return;
    }
    const userCheck2 = await UserService.checkUserPhoneNumber(phoneNumber);
    if (!userCheck2) {
      res.status(400).json({ error: "No such user was found" });
      return;
    }

    const isMatch = await user.comparePassword(password);

    if (isMatch === false) {
      res.status(400).json({ error: "Invalid password" });
      return;
    }
    let tokenData = { _id: user._id, email: user.email };

    const token = await UserService.generateToken(tokenData, "secretKey", "1h");

    res.status(200).json({ status: true, token: token });
  } catch (err) {
    throw err;
  }
};
