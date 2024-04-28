import { VideoResolution } from '../types/videos';
import bodyParser from 'body-parser';
import { app } from './app';
import express from 'express';
import { SETTINGS } from './settings';
import { Database } from './db';

app.listen(SETTINGS.PORT);

export const DB = new Database();
