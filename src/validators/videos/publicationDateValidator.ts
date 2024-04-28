import { SETTINGS } from '../../settings';

export default (date: string) => {
  if (!date) return 'This field is required';

  if (isNaN(new Date(date) as any) || date !== new Date(date).toISOString())
    return 'Invalid date fromat';
  return null;
};
