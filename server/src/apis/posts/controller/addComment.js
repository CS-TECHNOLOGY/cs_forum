import addCommentService from "../services/addComment";

export default async function addCommentController(req, res, next) {
  try {
    const { id_post, text } = req.body;
    const { id: id_user } = req.user;
    const response = await addCommentService(id_user, id_post, text);
    res.status(201).json(response);
  } catch (error) {
      next(error);
  }
}
