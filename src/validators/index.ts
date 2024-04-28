import { idText } from 'typescript';
import validateAuthor from './videos/authorValidator';
import validateResolutions from './videos/resolutionsValidator';
import validateTitle from './videos/titileValidator';
import { IFieldError } from '../../types/error';
import { ICreateVideoInputModel } from '../../types/videos';
import minAgeRestrictionValidator from './videos/minAgeRestrictionValidator';
import canBeDownloadedValidator from './videos/canBeDownloadedValidator';
import publicationDateValidator from './videos/publicationDateValidator';

type Validator =
  | typeof validateTitle
  | typeof validateAuthor
  | typeof validateResolutions
  | typeof minAgeRestrictionValidator
  | typeof canBeDownloadedValidator
  | typeof publicationDateValidator;

interface IFieldValidation<ObjectT> {
  fieldName: keyof ObjectT;
  validator: Validator;
}

export const validateObjectFields = <ObjectT>(
  objectToValidate: ObjectT,
  fields: IFieldValidation<ObjectT>[]
): IFieldError[] | null => {
  const errorMessages: IFieldError[] = [];

  fields.forEach(({ fieldName, validator }) => {
    const value = objectToValidate[fieldName];
    const validationResult = validator(value as any);
    if (validationResult) {
      const errorMessage: IFieldError = {
        field: fieldName as string,
        message: validationResult,
      };
      errorMessages.push(errorMessage);
    }
  });

  const objectToValidateKeys = Object.keys(objectToValidate as object);
  const fieldsNames: string[] = fields.map(
    (field) => field.fieldName as string
  );
  if (objectToValidateKeys.length !== fields.length) {
    objectToValidateKeys.forEach((key) => {
      if (!fieldsNames.includes(key)) {
        errorMessages.push({ field: key, message: 'Invalid field' });
      }
    });
  }
  if (errorMessages.length) {
    return errorMessages;
  }
  return null;
};
