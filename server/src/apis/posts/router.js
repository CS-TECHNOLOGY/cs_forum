import express from 'express';
import authMiddleware from '../../common/middleware/authentication';
import addCommentController from './controller/addComment';
import createPostController from './controller/createPost';
import likePostController from './controller/likePostController';
import getNewFeedController from './controller/getNewfeed';
import getPostController from './controller/getPost';
import sharePostController from './controller/sharePost';
import editCommentController from './controller/editComment';
import unlikePostController from './controller/unlikePostController';

const postRouter = express.Router();
const pathPost = '/post';

postRouter.post(`${pathPost}/create`, authMiddleware, createPostController);
postRouter.get(`${pathPost}/:id`, getPostController);
postRouter.post(`${pathPost}/comment`, authMiddleware, addCommentController);
postRouter.post(`${pathPost}/like_post`, authMiddleware, likePostController);
postRouter.get(`${pathPost}/newFeed/:pageNum`, getNewFeedController);
postRouter.post(`${pathPost}/share_post`, authMiddleware, sharePostController);
postRouter.post(`${pathPost}/edit_comment`, authMiddleware, editCommentController);
postRouter.post(`${pathPost}/unlike_post`, authMiddleware, unlikePostController);

export default postRouter;
