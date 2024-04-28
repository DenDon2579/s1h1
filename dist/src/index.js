"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
const app_1 = require("./app");
const settings_1 = require("./settings");
const db_1 = require("./db");
app_1.app.listen(settings_1.SETTINGS.PORT);
exports.DB = new db_1.Database();
