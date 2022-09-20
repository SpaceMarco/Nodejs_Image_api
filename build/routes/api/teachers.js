"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("../../logger/logger"));
var teachers = express_1.default.Router();
teachers.get('/teachers', logger_1.default, function (req, res, next) {
    res.send('teachers route');
    next();
});
exports.default = teachers;
