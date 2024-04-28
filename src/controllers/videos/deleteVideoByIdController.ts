import { Request, Response } from 'express';
import { DB } from '../..';
import { HTTP_CODES } from '../../settings';

export default (req: Request, res: Response) => {
  const isDeleted = DB.deleteVideo(+req.params.id);
  console.log(isDeleted);
  if (isDeleted) {
    res.sendStatus(HTTP_CODES.NO_CONTENT);
    return;
  }
  res.sendStatus(HTTP_CODES.NOT_FOUND);
};
