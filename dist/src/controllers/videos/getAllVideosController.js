"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
const settings_1 = require("../../settings");
exports.default = (req, res) => {
    const videos = __1.DB.getAllVideos();
    res.status(settings_1.HTTP_CODES.OK).json(videos);
};
