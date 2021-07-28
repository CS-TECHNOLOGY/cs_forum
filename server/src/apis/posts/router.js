import express from 'express';
import authMiddleware from '../../common/middleware/authentication';
import addCommentController from './controller/addComment';
import createPostController from './controller/createPost';
const postRouter = express.Router();

postRouter.post('/post/create', authMiddleware, createPostController);
postRouter.post('/post/comment', authMiddleware, addCommentController);
// postRouter.put('/post/comment', authMiddleware, createPostController);
export default postRouter;
