import { VideoResolution } from '../../../types/videos';
import { SETTINGS } from '../../settings';

export default (resolutions: VideoResolution[]) => {
  if (!resolutions) return 'This field is required';
  if (!resolutions.length) return 'Video must have at least one resolution';
  if (resolutions.length !== new Set(resolutions).size)
    return "Video resolutions can't be duplicated";

  for (let i = 0; i < resolutions.length; i++) {
    if (!SETTINGS.VALID_VIDEO_RESOLUTIONS.includes(resolutions[i]))
      return `Invalid video resolution: ${resolutions[i]}`;
  }

  return null;
};
