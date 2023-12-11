const { Post,User,Tag,Category } = require("../models");

class publicPostController {
  static async posts(req, res, next) {
    try {
      // const data = await Post.findAll();
      const data = await Post.findAll({
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
      if (data) {
        res.status(200).json(data);
      }
    } catch (error) {
      next(error);
    }
  }
  static async detailPost(req, res, next) {
    const idPost = req.params.id;
    try {
      let post = await Post.findByPk(idPost, {
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
          { model: Tag },{ model: Category }
        ],
      });
      if (!post) {
        throw { name: "not_found" };
      }

      res.status(200).json(post);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = publicPostController;
