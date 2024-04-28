import { SETTINGS } from '../../settings';

export default (author: string) => {
  if (!author) return 'This field is required';
  if (author.length > SETTINGS.VIDEO_AUTHOR_MAX_LENGTH) return 'Invalid length';
  return null;
};
