import createPostService from '../services/createPost';

export default async function createPostController(req, res, next) {
  try {
    const { title, content } = req.body;
    const { id } = req.user;
    console.log(req.user);
    const response = await createPostService(title, content, id);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}
