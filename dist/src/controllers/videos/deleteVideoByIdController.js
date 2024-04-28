"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
const settings_1 = require("../../settings");
exports.default = (req, res) => {
    const isDeleted = __1.DB.deleteVideo(+req.params.id);
    console.log(isDeleted);
    if (isDeleted) {
        res.sendStatus(settings_1.HTTP_CODES.NO_CONTENT);
        return;
    }
    res.sendStatus(settings_1.HTTP_CODES.NOT_FOUND);
};
