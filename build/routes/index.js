"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Images_1 = __importDefault(require("./api/Images"));
var routes = express_1.default.Router();
routes.use('/images', Images_1.default);
routes.get('/', function (req, res) {
    res
        .status(200)
        .send('Welcome to the image processing api project try: /images?filename=fjord&width=100&height=100');
});
exports.default = routes;
