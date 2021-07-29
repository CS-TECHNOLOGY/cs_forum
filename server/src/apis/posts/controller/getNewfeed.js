import getNewfeedService from "../services/getNewfeed";

export default async function getNewfeedController(req, res, next) {
  try {
      console.log(req.params)
    const { id: id_user } = req.user;
    const { page: pageNum } = req.params.pageNum;
    const response = await getNewfeedService(id_user, pageNum);
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
}
