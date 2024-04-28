"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (canBeDownloaded) => {
    if (canBeDownloaded === undefined)
        return 'This field is required';
    if (typeof canBeDownloaded !== 'boolean')
        return 'Invalid type, must be boolean';
    return null;
};
