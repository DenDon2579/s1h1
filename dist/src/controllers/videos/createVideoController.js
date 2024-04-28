"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const titileValidator_1 = __importDefault(require("../../validators/videos/titileValidator"));
const authorValidator_1 = __importDefault(require("../../validators/videos/authorValidator"));
const resolutionsValidator_1 = __importDefault(require("../../validators/videos/resolutionsValidator"));
const settings_1 = require("../../settings");
const validators_1 = require("../../validators");
const __1 = require("../..");
exports.default = (req, res) => {
    const newVideoRequestData = req.body;
    const errorMessages = (0, validators_1.validateObjectFields)(newVideoRequestData, [
        { fieldName: 'title', validator: titileValidator_1.default },
        { fieldName: 'author', validator: authorValidator_1.default },
        { fieldName: 'availableResolutions', validator: resolutionsValidator_1.default },
    ]);
    if (errorMessages) {
        const errorObject = { errorMessages };
        res.status(settings_1.HTTP_CODES.BAD_REQUEST).json(errorObject);
        return;
    }
    const videoCreationTime = new Date().toISOString();
    const videoData = Object.assign({ id: Date.now(), canBeDownloaded: true, minAgeRestriction: null, createdAt: videoCreationTime, publicationDate: videoCreationTime }, newVideoRequestData);
    __1.DB.createVideo(videoData);
    res.status(settings_1.HTTP_CODES.CREATED).json(videoData);
};
