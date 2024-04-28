"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("../../settings");
exports.default = (author) => {
    if (!author)
        return 'This field is required';
    if (author.length > settings_1.SETTINGS.VIDEO_AUTHOR_MAX_LENGTH)
        return 'Invalid length';
    return null;
};
