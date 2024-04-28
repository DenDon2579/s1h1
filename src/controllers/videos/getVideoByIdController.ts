import { Request, Response } from 'express';
import { DB } from '../..';
import { HTTP_CODES } from '../../settings';

export default (req: Request, res: Response) => {
  const requestedVideo = DB.getVideo(+req.params.id);
  if (requestedVideo) {
    res.status(HTTP_CODES.OK).json(requestedVideo);
    return;
  }
  res.sendStatus(HTTP_CODES.NOT_FOUND);
};
