import express from "express";
import getUserInfoController from "./controller/getUserInfo";
import loginController from "./controller/login";
import registerController from "./controller/register";

const authRouter = express.Router();


authRouter.post('/register', registerController);
authRouter.post('/login', loginController);
authRouter.get('/useInfo/:id', getUserInfoController);

export default authRouter;