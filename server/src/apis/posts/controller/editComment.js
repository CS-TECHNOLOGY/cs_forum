import editCommentService from "../services/editComment";

export default async function editCommentController(req, res, next) {
  try {
    const { id_post, text , id_comment } = req.body;
    const { id: id_user } = req.user;
    const response = await editCommentService(id_user, id_post, text, id_comment);
    res.status(201).json(response);
  } catch (error) {
      next(error);
  }
}
