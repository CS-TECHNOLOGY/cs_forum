import getNewFeedService from "../services/getNewfeed";

export default async function getNewFeedController(req, res, next) {
  try {
    const { page: pageNum } = req.params.pageNum;
    const response = await getNewFeedService(pageNum);
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
}
