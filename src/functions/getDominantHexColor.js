"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDominantHexColor = getDominantHexColor;
const node_vibrant_1 = __importDefault(require("node-vibrant"));
const discord_js_1 = require("discord.js");
function getDominantHexColor(imageUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const palette = yield node_vibrant_1.default.from(imageUrl).getPalette();
            const dominantColor = (_a = palette.Vibrant) === null || _a === void 0 ? void 0 : _a.hex;
            return dominantColor ? parseInt(dominantColor.slice(1), 16) : discord_js_1.Colors.Blurple;
        }
        catch (error) {
            return discord_js_1.Colors.Blurple;
        }
    });
}
