import express from 'express';
import guidRouter from "./guid";
import userRouter from "./users";

const router = express.Router();

guidRouter(router);
userRouter(router);

export default router;
