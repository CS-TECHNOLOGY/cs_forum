import express from 'express';
import authMiddleware from '../../common/middleware/authentication';
import createPostController from './controller/createPost';
const postRouter = express.Router();
postRouter.post('/post/create', authMiddleware, createPostController);
postRouter.get('/post/:id', authMiddleware, createPostController);
postRouter.post('/post/:id', authMiddleware, createPostController);
export default postRouter;
