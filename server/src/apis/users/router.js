import express from "express";
import loginController from "../controller/login";

const authRouter = express.Router();

authRouter.post('/login', loginController);
authRouter.post('/register', registerController);
authRouter.get('/useInfo/', getUserInfoController);
export default authRouter;