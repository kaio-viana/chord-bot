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
exports.execute = exports.once = exports.name = void 0;
const command_1 = require("../../handlers/command");
const button_1 = require("../../handlers/button");
const discord_js_1 = require("discord.js");
const mongoose_1 = __importDefault(require("mongoose"));
const readyEvent = {
    name: discord_js_1.Events.ClientReady,
    once: true,
    execute(client) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            console.log('| Bot created by @mika.ts');
            console.log('-'.black);
            console.log(`[ Client ] ${(_a = client.user) === null || _a === void 0 ? void 0 : _a.username} is Online!`.green);
            if (process.env.MONGO_URL) {
                yield mongoose_1.default.connect(process.env.MONGO_URL, { dbName: "Jarvis" });
                if (mongoose_1.default.connection.readyState === 1) {
                    console.log(`[ Database ] Connected to Cluster!`.green);
                }
            }
            try {
                yield client.lavalink.init(Object.assign(Object.assign({}, client.user), { shards: "auto" }));
                (_b = client.user) === null || _b === void 0 ? void 0 : _b.setActivity({ name: `chordbot.xyz`, type: discord_js_1.ActivityType.Watching });
                yield (0, command_1.loadCommands)(client);
                yield (0, button_1.loadButtons)(client);
            }
            catch (error) {
                console.log(`[ Error ] While Loading: ${error}`.red);
            }
        });
    }
};
const { name, once, execute } = readyEvent;
exports.name = name;
exports.once = once;
exports.execute = execute;
