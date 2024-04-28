"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTP_CODES = exports.SETTINGS = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.SETTINGS = {
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
    ],
    VIDEO_TITLE_MAX_LENGTH: 40,
    VIDEO_AUTHOR_MAX_LENGTH: 20,
};
exports.HTTP_CODES = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
};
