import getPostService from "../services/getPost";

export default async function getPostController(req, res, next) {
  try {
    const { id: id_post } = req.params;
    const response = await getPostService(id_post);
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
}
