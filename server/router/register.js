import express from "express";
import registerController from "../controller/register";

const registerRouter = express.Router();

registerRouter.post('/register', registerController);

export default registerRouter;