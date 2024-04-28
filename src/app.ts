import Express from 'express';

import isValidResolutions from './validators/videos/resolutionsValidator';
import bodyParser from 'body-parser';
import cors from 'cors';
import { videosRouter } from './routers/videos';
import { testingRouter } from './routers/testing';

export const app = Express();

app.use(bodyParser.json()).use(cors());
app.use('/videos', videosRouter);
app.use('/testing', testingRouter);
