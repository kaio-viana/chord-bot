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
exports.loadCommands = loadCommands;
const getFiles_1 = require("../functions/getFiles");
const path_1 = __importDefault(require("path"));
function loadCommands(client) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const commandsArray = [];
        const commandPath = path_1.default.resolve(__dirname, '../commands');
        const files = (0, getFiles_1.getFiles)(commandPath);
        for (const file of files) {
            const command = require(path_1.default.resolve(file));
            client.commands.set(command.data.name, command);
            commandsArray.push(command.data.toJSON ? command.data.toJSON() : command.data);
        }
        yield ((_a = client.application) === null || _a === void 0 ? void 0 : _a.commands.set(commandsArray));
    });
}
