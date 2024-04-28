"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("../../settings");
exports.default = (resolutions) => {
    if (!resolutions || !resolutions.length)
        return false;
    if (resolutions.length !== new Set(resolutions).size)
        return false;
    for (let i = 0; i < resolutions.length; i++) {
        if (!settings_1.SETTINGS.VALID_VIDEO_RESOLUTIONS.includes(resolutions[i]))
            return false;
    }
    return true;
};
