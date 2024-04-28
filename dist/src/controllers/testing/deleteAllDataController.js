"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
const settings_1 = require("../../settings");
exports.default = (req, res) => {
    __1.DB.clearDatabase();
    res.sendStatus(settings_1.HTTP_CODES.NO_CONTENT);
};
