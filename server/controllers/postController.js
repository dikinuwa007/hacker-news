const { Category, Post, Tag, sequelize, User } = require("../models");

class postController {
  static async add(req, res, next) {
    const t = await sequelize.transaction();
    //untuk tag itu menggunakan array object // atau di client di kasih default value =''
    try {
      const { title, content, imgUrl, categoryId, tag1, tag2 } = req.body;
      const authorId = req.user.id;
      // console.log(authorId,'AUTHOr');
      if (!tag1 || !tag2) {
        throw { name: "tag_require" };
      }
      const post = await Post.create(
        {
          title,
          content,
          imgUrl,
          categoryId,
          authorId,
        },
        { transaction: t }
      );
      const createTag = await Tag.bulkCreate(
        [
          {
            name: tag1,
            postId: post.id,
          },
          {
            name: tag2,
            postId: post.id,
          },
        ],
        { transaction: t }
      );
      await t.commit();
      res.status(201).json();
    } catch (err) {
      await t.rollback();
      next(err);
    }
  }

  static async posts(req, res, next) {
    try {
      const posts = await Post.findAll({
        order: [["id", "DESC"]],
        include: [
          {
            model: User,
            attributes: [
              "id",
              "username",
              "email",
              "role",
              "phoneNumber",
              "address",
              "createdAt",
              "updatedAt",
            ],
          },
          { model: Tag },
          { model: Category },
        ],
      });
      return res.status(200).json(posts);
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    const id = req.params.id;
    console.log("masuk update", id);
    const { title, content, imgUrl, categoryId, tag1, tag2 } = req.body;
    try {
      const t = await sequelize.transaction();
      const post = await Post.findByPk(id);
      if (post === null) {
        throw { name: "not_found", id };
      }
      const updated = await Post.update(
        { title, content, imgUrl, categoryId },
        { where: { id } },
        { transaction: t }
      );
      // const updatedtag1 = await Tag.update(
      //   { name: tag1.name },
      //   { where: { id: tag1.id, postId: id } },
      //   { transaction: t }
      // );
      // const updatedtag2 = await Tag.update(
      //   { name: tag2.name },
      //   { where: { id: tag2.id, postId: id } },
      //   { transaction: t }
      // );
      return res.status(200).json({ message: `Success Updated Item` });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async delete(req, res, next) {
    const id = req.params.id;
    try {
      const t = await sequelize.transaction();
      const dataFound = await Post.findOne({ where: { id } });
      if (dataFound) {
        await Tag.destroy({ where: { postId: id } }, { transaction: t });
        await Post.destroy({ where: { id: id } }, { transaction: t });
        await t.commit();
        return res.status(200).json(dataFound);
      } else {
        throw { name: "not_found", id };
      }
    } catch (error) {
      next(error);
    }
  }

  static async categories(req, res, next) {
    try {
      const category = await Category.findAll();
      res.status(200).json(category);
    } catch (err) {
      next(err);
    }
  }
  static async editCategory(req, res, next) {
    const id = req.params.id;
    const { name } = req.body;
    try {
      const category = await Category.findByPk(id);
      if (category === null) {
        throw { name: "not_found", id };
      }
      const updated = await Category.update({ name }, { where: { id } });
      return res.status(200).json({ message: `Success Updated Category` });
    } catch (err) {
      next(err);
    }
  }

  static async categoriesCreate(req, res, next) {
    const { name } = req.body;
    try {
      const category = await Category.create({ name });
      res.status(201).json(category);
    } catch (err) {
      next(err);
    }
  }
  static async categoriesDelete(req, res, next) {
    const id = req.params.categoryId;
    console.log(id, "<<<<<<<<<");
    try {
      const dataFound = await Category.findOne({ where: { id } });
      if (dataFound) {
        await Category.destroy({ where: { id: id } });
        return res.status(200).json(dataFound);
      } else {
        throw { name: "not_found", id };
      }
    } catch (error) {
      next(error);
    }
  }
}
module.exports = postController;
