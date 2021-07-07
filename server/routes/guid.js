import express from 'express';
import { guidService } from "../services"

export default guidRouter = (app) => {
    const route = express.Router();

    app.use('/id', route);

    route.get('/', (req, res) => {
        const uuid = guidService.getUniqueId();
        res.send({
            id: uuid,
        });
    });
}