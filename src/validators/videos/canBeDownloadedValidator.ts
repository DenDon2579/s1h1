import { SETTINGS } from '../../settings';

export default (canBeDownloaded: any) => {
  if (canBeDownloaded === undefined) return 'This field is required';
  if (typeof canBeDownloaded !== 'boolean')
    return 'Invalid type, must be boolean';
  return null;
};
