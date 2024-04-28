import dotenv from 'dotenv';
dotenv.config();

export const SETTINGS = {
  PORT: process.env.PORT || 3000,
  VALID_VIDEO_RESOLUTIONS: [
    'P144',
    'P240',
    'P360',
    'P480',
    'P720',
    'P1080',
    'P1440',
    'P2160',
  ] as const,
  VIDEO_TITLE_MAX_LENGTH: 40,
  VIDEO_AUTHOR_MAX_LENGTH: 20,
};

export const HTTP_CODES = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
};
