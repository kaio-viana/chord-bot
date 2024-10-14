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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bot = void 0;
const discord_js_1 = require("discord.js");
const event_1 = require("../handlers/event");
const lavalink_client_1 = require("lavalink-client");
require("colors");
class Bot extends discord_js_1.Client {
    constructor() {
        super({
            intents: 3276799
        });
        this.commands = new discord_js_1.Collection();
        this.buttons = new discord_js_1.Collection();
        this.modals = new discord_js_1.Collection();
        this.channel = new discord_js_1.Collection();
        this.string = new discord_js_1.Collection();
        this.mention = new discord_js_1.Collection();
        this.role = new discord_js_1.Collection();
        this.userContext = new discord_js_1.Collection();
        this.lavalink = new lavalink_client_1.LavalinkManager({
            nodes: [
                {
                    authorization: "LVyuklJsP9CWqMRxdauvARWQyAJazhRX",
                    host: "chordlavalink.squareweb.app",
                    port: 443,
                    id: "Chord",
                    secure: true
                }
            ],
            sendToShard: (guildId, payload) => { var _a, _b; return (_b = (_a = this.guilds.cache.get(guildId)) === null || _a === void 0 ? void 0 : _a.shard) === null || _b === void 0 ? void 0 : _b.send(payload); },
            autoSkip: true,
            emitNewSongsOnly: true,
            client: {
                id: process.env.CLIENT_ID,
                username: "Chord",
            },
            playerOptions: {
                applyVolumeAsFilter: false,
                clientBasedPositionUpdateInterval: 50,
                defaultSearchPlatform: "ytmsearch",
                volumeDecrementer: 0.75,
                onDisconnect: {
                    destroyPlayer: true
                },
                onEmptyQueue: {
                    destroyAfterMs: 1
                },
            },
            queueOptions: {
                maxPreviousTracks: 5
            },
        });
        (0, event_1.loadEvents)(this);
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!process.env.BOT_TOKEN) {
                console.error('[ Client ] Bot token not configured. Set the token in .env'.red);
                return;
            }
            this.on("raw", d => this.lavalink.sendRawData(d));
            this.login(process.env.BOT_TOKEN)
                .catch((error) => {
                console.error('[ Client ] Error starting the bot:'.red, error);
            });
        });
    }
}
exports.Bot = Bot;
