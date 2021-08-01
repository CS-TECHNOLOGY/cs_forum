import getPostService from "../services/getPost";

export default async function getPostController(req, res, next) {
  try {
      console.log(req.params)
    const { id: id_user } = req.user;
    const { page: pageNum } = req.params.pageNum;
    const response = await getPostService(id_user, pageNum);
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
}
