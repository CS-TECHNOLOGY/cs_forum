import express from "express";
import loginController from "../controller/login";

const loginRouter = express.Router();

loginRouter.post('/login', loginController);

export default loginRouter;