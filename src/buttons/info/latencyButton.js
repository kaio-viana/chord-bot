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
exports.execute = exports.data = void 0;
const discord_js_1 = require("discord.js");
const latencyButton = {
    data: {
        name: "latencyButton"
    },
    execute(interaction, client) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield interaction.update({
                embeds: [
                    new discord_js_1.EmbedBuilder()
                        .setTitle("🏓 Pong!")
                        .setDescription(`💢 **Ping**: \`${client.ws.ping}\`ms`)
                        .setColor(discord_js_1.Colors.Red)
                ], components: []
            });
        });
    }
};
const { data, execute } = latencyButton;
exports.data = data;
exports.execute = execute;
