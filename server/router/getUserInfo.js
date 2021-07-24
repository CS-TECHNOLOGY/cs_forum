import express from "express";
import getUserInfoController from "../controller/getUserInfo";

const getUserInfoRouter = express.Router();

getUserInfoRouter.get('/useInfo/', getUserInfoController);

export default getUserInfoRouter;