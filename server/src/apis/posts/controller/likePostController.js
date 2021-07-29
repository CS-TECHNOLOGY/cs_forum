import likePostService from "../services/likePost";

export default async function likePostController(req, res, next) {
  try {
    const { id_post } = req.body;
    const { id } = req.user;
    const response = await likePostService(id_post, id);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}
