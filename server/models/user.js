"use strict";
const bcrypt = require('bcryptjs')
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post, { foreignKey: "authorId" });
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: { msg: "Email must be unique" },
        validate: {
          isEmail: { msg: "Invalid email format" },
          notEmpty: { msg: "Email is required" },
          notNull: { msg: "Email is required" },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Password is required" },
          notNull: { msg: "Password is required" },
        },
      },
      username: DataTypes.STRING,
      role: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate(user, option) {
          let salt = bcrypt.genSaltSync(5);
          let hash = bcrypt.hashSync(user.password, salt);
          user.password = hash;
          user.role = "admin";
        },
      },
      sequelize,
      validate: {
        lengthPassword() {
          if (this.password.length < 5) {
            throw new Error(`password must be 5 or greater`);
          }
        },
      },
      modelName: "User",
    }
  );
  return User;
};
