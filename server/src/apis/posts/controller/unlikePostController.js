import unlikePostService from "../services/unlikePost";

export default async function unlikePostController(req, res, next) {
  try {
    const { id_post } = req.body;
    const { id } = req.user;
    const response = await unlikePostService(id_post, id);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}
