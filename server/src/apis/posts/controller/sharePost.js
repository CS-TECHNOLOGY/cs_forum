import sharePostService from "../services/sharePost";

export default async function sharePostController(req, res, next) {
  try {
    const { id_post } = req.body;
    const { id } = req.user;
    const response = await sharePostService(id_post, id);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}
