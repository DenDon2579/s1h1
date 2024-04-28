"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testingRouter = void 0;
const express_1 = require("express");
const deleteAllDataController_1 = __importDefault(require("../controllers/testing/deleteAllDataController"));
exports.testingRouter = (0, express_1.Router)();
exports.testingRouter.delete('/all-data', deleteAllDataController_1.default);
