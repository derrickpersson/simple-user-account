import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import router from './routes/index';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1', router);

export default app;
