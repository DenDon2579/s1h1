"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const blogs_1 = require("./routers/blogs");
const posts_1 = require("./routers/posts");
const testing_1 = require("./routers/testing");
exports.app = (0, express_1.default)();
exports.app.use(body_parser_1.default.json()).use((0, cors_1.default)());
exports.app.use('/blog', blogs_1.blogsRouter);
exports.app.use('/post', posts_1.postsRouter);
exports.app.use('/testing', testing_1.testingRouter);
