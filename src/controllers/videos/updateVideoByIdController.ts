import { Request, Response } from 'express';
import { DB } from '../..';
import { HTTP_CODES } from '../../settings';
import { validateObjectFields } from '../../validators';
import titileValidator from '../../validators/videos/titileValidator';
import authorValidator from '../../validators/videos/authorValidator';
import resolutionsValidator from '../../validators/videos/resolutionsValidator';
import { IUpdateVideoInputModel } from '../../../types/videos';
import minAgeRestrictionValidator from '../../validators/videos/minAgeRestrictionValidator';
import canBeDownloadedValidator from '../../validators/videos/canBeDownloadedValidator';
import publicationDateValidator from '../../validators/videos/publicationDateValidator';
import { IErrorResult } from '../../../types/error';

export default (req: Request, res: Response) => {
  const videoUpdateData: IUpdateVideoInputModel = req.body;

  const errorMessages = validateObjectFields(videoUpdateData, [
    { fieldName: 'title', validator: titileValidator },
    { fieldName: 'author', validator: authorValidator },
    { fieldName: 'availableResolutions', validator: resolutionsValidator },
    { fieldName: 'minAgeRestriction', validator: minAgeRestrictionValidator },
    { fieldName: 'canBeDownloaded', validator: canBeDownloadedValidator },
    { fieldName: 'publicationDate', validator: publicationDateValidator },
  ]);

  if (errorMessages) {
    const errorObject: IErrorResult = { errorMessages };
    res.status(HTTP_CODES.BAD_REQUEST).json(errorObject);
    return;
  }

  const isUpdated = DB.updateVideo(+req.params.id, videoUpdateData);
  if (isUpdated) {
    res.sendStatus(HTTP_CODES.NO_CONTENT);
    return;
  }
  res.sendStatus(HTTP_CODES.NOT_FOUND);
};
