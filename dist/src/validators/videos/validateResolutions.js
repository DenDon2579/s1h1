"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("../../settings");
exports.default = (resolutions) => {
    if (!resolutions)
        return 'This field is required';
    if (!resolutions.length)
        return 'Video must have at least one resolution';
    if (resolutions.length !== new Set(resolutions).size)
        return "Video resolutions can't be duplicated";
    for (let i = 0; i < resolutions.length; i++) {
        if (!settings_1.SETTINGS.VALID_VIDEO_RESOLUTIONS.includes(resolutions[i]))
            return `Invalid video resolution: ${resolutions[i]}`;
    }
    return null;
};
