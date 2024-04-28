import { SETTINGS } from '../../settings';

export default (title: string) => {
  if (!title) return 'This field is required';
  if (title.length > SETTINGS.VIDEO_TITLE_MAX_LENGTH) return 'Invalid length';
  return null;
};
