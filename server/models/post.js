"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.Category, { foreignKey: "categoryId" });
      Post.belongsTo(models.User,{foreignKey:'authorId'})
      Post.hasMany(models.Tag,{foreignKey:'postId'})
    }
  }
  Post.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "title is required" },
          notEmpty: { msg: "title is required" },
        },
      },
      slug: DataTypes.STRING,
      content: {
        type: DataTypes.TEXT,
        allowNull:false,
        validate: {
          notNull: { msg: "content is required" },
          notEmpty: { msg: "content is required" },
        },
      },
      imgUrl: DataTypes.STRING,
      categoryId: {
        type: DataTypes.INTEGER,
        references: { model: "Categories" },
        onDelete:'cascade',
        onUpdate:'cascade'
      },
      authorId: {
        type: DataTypes.INTEGER,
        references: { model: "Users" },
        onDelete:'cascade',
        onUpdate:'cascade'
      },
    },
    {
      hooks: {
        beforeCreate(post, option) {
          post.slug = post.title.split(" ").join("-");
        },
      },
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
