import authRouter from "./auth/router.js";
import postRouter from "./posts/router.js";

const rootRouter = [
    authRouter,
    postRouter,
];

export default rootRouter;
