"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (date) => {
    if (!date)
        return 'This field is required';
    if (isNaN(new Date(date)))
        return 'Invalid date fromat';
    return null;
};
