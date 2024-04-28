"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
const settings_1 = require("../../settings");
exports.default = (req, res) => {
    const requestedVideo = __1.DB.getVideo(+req.params.id);
    if (requestedVideo) {
        res.status(settings_1.HTTP_CODES.OK).json(requestedVideo);
        return;
    }
    res.sendStatus(settings_1.HTTP_CODES.NOT_FOUND);
};
