import { Router } from 'express';
import createVideoController from '../controllers/videos/createVideoController';
import getAllVideosController from '../controllers/videos/getAllVideosController';
import getVideoByIdController from '../controllers/videos/getVideoByIdController';
import deleteVideoByIdController from '../controllers/videos/deleteVideoByIdController';
import updateVideoByIdController from '../controllers/videos/updateVideoByIdController';

export const videosRouter = Router();

videosRouter.post('/', createVideoController);
videosRouter.get('/', getAllVideosController);
videosRouter.get('/:id', getVideoByIdController);
videosRouter.delete('/:id', deleteVideoByIdController);
videosRouter.put('/:id', updateVideoByIdController);
