import express from 'express';
import authMiddleware from '../../common/middleware/authentication';
import addCommentController from './controller/addComment';
import createPostController from './controller/createPost';
import likePostController from './controller/likePostController';
import getNewFeedController from './controller/getNewfeed';
import getPostController from './controller/getPost';
import sharePostController from './controller/sharePost';
import editCommentController from './controller/editComment';

const postRouter = express.Router();
const pathPost = '/post';

postRouter.post(`${pathPost}/create`, authMiddleware, createPostController);
postRouter.get(`${pathPost}/:id`, getPostController);
postRouter.post(`${pathPost}/comment`, authMiddleware, addCommentController);
postRouter.post(`${pathPost}/like_post`, authMiddleware, likePostController);
postRouter.get(`${pathPost}/newFeed/:pageNum`, getNewFeedController);
postRouter.post(`${pathPost}/share_post`, authMiddleware, sharePostController);
postRouter.post(`${pathPost}/edit_comment`, authMiddleware, editCommentController);

export default postRouter;
