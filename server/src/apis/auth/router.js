import express from "express";
import authMiddleware from "../../common/middleware/authentication";
import getUserInfoController from "./controller/getUserInfo";
import loginController from "./controller/login";
import registerController from "./controller/register";

const authRouter = express.Router();


authRouter.post('/register', registerController);
authRouter.post('/login', loginController);
authRouter.get('/useInfo/:id', authMiddleware, getUserInfoController);

export default authRouter;