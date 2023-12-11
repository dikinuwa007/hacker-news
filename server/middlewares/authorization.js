const { Post } = require("../models");
async function authorization(req, res, next) {
  try {
    const id = req.params.id;
    console.log('id Post=',id);
    const findPost = await Post.findByPk(id);
    if (!findPost) {
      throw { name: "not_found", id };
    }
    if (req.user.role !== "admin") {
      if (req.user.id !== findPost.authorId) {
        throw { name: "forbidden" };
      }
    }
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = {authorization};
