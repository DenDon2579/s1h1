"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
const settings_1 = require("../../settings");
const validators_1 = require("../../validators");
const titileValidator_1 = __importDefault(require("../../validators/videos/titileValidator"));
const authorValidator_1 = __importDefault(require("../../validators/videos/authorValidator"));
const resolutionsValidator_1 = __importDefault(require("../../validators/videos/resolutionsValidator"));
const minAgeRestrictionValidator_1 = __importDefault(require("../../validators/videos/minAgeRestrictionValidator"));
const canBeDownloadedValidator_1 = __importDefault(require("../../validators/videos/canBeDownloadedValidator"));
const publicationDateValidator_1 = __importDefault(require("../../validators/videos/publicationDateValidator"));
exports.default = (req, res) => {
    const videoUpdateData = req.body;
    const errorsMessages = (0, validators_1.validateObjectFields)(videoUpdateData, [
        { fieldName: 'title', validator: titileValidator_1.default },
        { fieldName: 'author', validator: authorValidator_1.default },
        { fieldName: 'availableResolutions', validator: resolutionsValidator_1.default },
        { fieldName: 'minAgeRestriction', validator: minAgeRestrictionValidator_1.default },
        { fieldName: 'canBeDownloaded', validator: canBeDownloadedValidator_1.default },
        { fieldName: 'publicationDate', validator: publicationDateValidator_1.default },
    ]);
    if (errorsMessages) {
        const errorObject = { errorsMessages };
        res.status(settings_1.HTTP_CODES.BAD_REQUEST).json(errorObject);
        return;
    }
    const isUpdated = __1.DB.updateVideo(+req.params.id, videoUpdateData);
    if (isUpdated) {
        res.sendStatus(settings_1.HTTP_CODES.NO_CONTENT);
        return;
    }
    res.sendStatus(settings_1.HTTP_CODES.NOT_FOUND);
};
