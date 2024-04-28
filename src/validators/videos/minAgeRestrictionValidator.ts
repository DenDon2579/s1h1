import { SETTINGS } from '../../settings';

export default (minAgeRestriction: string | null) => {
  if (minAgeRestriction === null) return null;
  if (minAgeRestriction === undefined) return 'This field is required';
  if (+minAgeRestriction < 1 || +minAgeRestriction > 18)
    return 'Invalid number. Must be between 1 and 18';
  return null;
};
