import express from 'express';
import guidRouter from "./guid";
import userRouter from "./users";

const router = express.Router();

router.use('/id', guidRouter);
router.use('/user', userRouter);

export default router;
