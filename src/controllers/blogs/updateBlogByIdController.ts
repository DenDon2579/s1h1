import { Request, Response } from 'express';
import BlogRepository from '../../data/repos/BlogRepository';
import { HTTP_CODES } from '../../settings';

export default (req: Request, res: Response) => {
  const result = BlogRepository.updateById(req.params.id, req.body);
  if (result) {
    res.status(HTTP_CODES.NO_CONTENT).json(result);
    return;
  }
  res.sendStatus(HTTP_CODES.NOT_FOUND);
};
