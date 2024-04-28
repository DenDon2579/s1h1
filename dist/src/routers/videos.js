"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.videosRouter = void 0;
const express_1 = require("express");
const createVideoController_1 = __importDefault(require("../controllers/videos/createVideoController"));
const getAllVideosController_1 = __importDefault(require("../controllers/videos/getAllVideosController"));
const getVideoByIdController_1 = __importDefault(require("../controllers/videos/getVideoByIdController"));
const deleteVideoByIdController_1 = __importDefault(require("../controllers/videos/deleteVideoByIdController"));
const updateVideoByIdController_1 = __importDefault(require("../controllers/videos/updateVideoByIdController"));
exports.videosRouter = (0, express_1.Router)();
exports.videosRouter.post('/', createVideoController_1.default);
exports.videosRouter.get('/', getAllVideosController_1.default);
exports.videosRouter.get('/:id', getVideoByIdController_1.default);
exports.videosRouter.delete('/:id', deleteVideoByIdController_1.default);
exports.videosRouter.put('/:id', updateVideoByIdController_1.default);
