const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
class userController {
  static async register(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body;
      const user = await User.create({
        username,
        email,
        password,
        phoneNumber,
        address,
      });
      res.status(201).json({
        id: user.id,
        email: user.email,
      });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw { name: `invalid_email_password` };
      } else {
        const isValid = bcrypt.compareSync(password, user.password);
        if (!isValid) {
          throw { name: `invalid_email_password` };
        } else {
          const payload = { id: user.id, email: user.email };
          const token = jwt.sign(payload, process.env.SECRET);
          return res.status(200).json({ access_token: token,role: user.role});
        }
      }
    } catch (err) {
      next(err);
    }
  }
}
module.exports = userController;
