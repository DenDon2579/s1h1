import { ICreateVideoInputModel, IVideo } from './../../../types/videos';
import { IErrorResult, IFieldError } from './../../../types/error';
import { Request, Response } from 'express';
import titileValidator from '../../validators/videos/titileValidator';
import authorValidator from '../../validators/videos/authorValidator';
import resolutionsValidator from '../../validators/videos/resolutionsValidator';
import { HTTP_CODES } from '../../settings';
import { validateObjectFields } from '../../validators';
import { DB } from '../..';

export default (
  req: Request<any, any, ICreateVideoInputModel, any, any>,
  res: Response
) => {
  const newVideoRequestData = req.body;
  const errorMessages = validateObjectFields(newVideoRequestData, [
    { fieldName: 'title', validator: titileValidator },
    { fieldName: 'author', validator: authorValidator },
    { fieldName: 'availableResolutions', validator: resolutionsValidator },
  ]);

  if (errorMessages) {
    const errorObject: IErrorResult = { errorMessages };
    res.status(HTTP_CODES.BAD_REQUEST).json(errorObject);
    return;
  }
  const videoCreationTime = new Date().toISOString();

  const videoData: IVideo = {
    id: Date.now(),
    canBeDownloaded: true,
    minAgeRestriction: null,
    createdAt: videoCreationTime,
    publicationDate: videoCreationTime,
    ...newVideoRequestData,
  };

  DB.createVideo(videoData);
  res.status(HTTP_CODES.CREATED).json(videoData);
};
