import express from 'express';
import authMiddleware from '../../common/middleware/authentication';
import addCommentController from './controller/addComment';
import createPostController from './controller/createPost';
import getNewfeedController from './controller/getNewfeed';
import getPostController from './controller/getPost';
const postRouter = express.Router();

postRouter.post('/post/create', authMiddleware, createPostController);
postRouter.post('/post/comment', authMiddleware, addCommentController);
postRouter.get('/get/newfeed/:pageNum', authMiddleware, getNewfeedController);
postRouter.get('/get/post/', authMiddleware, getPostController);

export default postRouter;
