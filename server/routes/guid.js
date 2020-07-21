import express from 'express';
import { guidService } from "../services"

const guidRouter = express.Router();

guidRouter.get('/', (req, res) => {
    const uuid = guidService.getUniqueId();
    res.send({
        id: uuid,
    });
});

export default guidRouter;