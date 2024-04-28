import { Request, Response } from 'express';
import { DB } from '../..';
import { HTTP_CODES } from '../../settings';

export default (req: Request, res: Response) => {
  const videos = DB.getAllVideos();
  res.status(HTTP_CODES.OK).json(videos);
};
