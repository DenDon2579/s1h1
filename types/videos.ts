import { SETTINGS } from '../src/settings';

export type VideoResolution = (typeof SETTINGS.VALID_VIDEO_RESOLUTIONS)[number];

export interface IVideo {
  id: number;
  title: string; // maxLength 40
  author: string; // maxLength 20
  availableResolutions: VideoResolution[];
  canBeDownloaded: boolean; // default: false
  minAgeRestriction: number | null; // num[1; 18] | null
  publicationDate: string; // ISO_DATE string
  createdAt: string; // ISO_DATE string; default: publicationDate + 1day
}

export interface ICreateVideoInputModel {
  title: string; // maxLength 40
  author: string; // maxLength 20
  availableResolutions: VideoResolution[];
}

export interface IUpdateVideoInputModel {
  title: string; // maxLength 40
  author: string; // maxLength 20
  availableResolutions?: VideoResolution[];
  canBeDownloaded: boolean; // default: false
  minAgeRestriction: number | null; // num[1; 18] | null
  publicationDate: string; // ISO_DATE string
}
