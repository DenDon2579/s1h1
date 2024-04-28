"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("../../settings");
exports.default = (title) => {
    if (!title)
        return 'This field is required';
    if (title.length > settings_1.SETTINGS.VIDEO_TITLE_MAX_LENGTH)
        return 'Invalid length';
    return null;
};
