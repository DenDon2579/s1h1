"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("../../settings");
exports.default = (author) => author && author.length <= settings_1.SETTINGS.VIDEO_AUTHOR_MAX_LENGTH;
