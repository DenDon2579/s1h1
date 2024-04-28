"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateObjectFields = void 0;
const validateObjectFields = (objectToValidate, fields) => {
    const errorMessages = [];
    fields.forEach(({ fieldName, validator }) => {
        const value = objectToValidate[fieldName];
        const validationResult = validator(value);
        if (validationResult) {
            const errorMessage = {
                field: fieldName,
                message: validationResult,
            };
            errorMessages.push(errorMessage);
        }
    });
    const objectToValidateKeys = Object.keys(objectToValidate);
    const fieldsNames = fields.map((field) => field.fieldName);
    if (objectToValidateKeys.length !== fields.length) {
        objectToValidateKeys.forEach((key) => {
            if (!fieldsNames.includes(key)) {
                errorMessages.push({ field: key, message: 'Invalid field' });
            }
        });
    }
    if (errorMessages.length) {
        return errorMessages;
    }
    return null;
};
exports.validateObjectFields = validateObjectFields;
