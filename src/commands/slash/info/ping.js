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
const command = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName("ping")
        .setDescription("[ Info ] - Shows my latency")
        .setDescriptionLocalizations({ "pt-BR": "[ Info ] - Mostra minha latência" }),
    execute(interaction, client) {
        return __awaiter(this, void 0, void 0, function* () {
            return interaction.reply({
                embeds: [
                    new discord_js_1.EmbedBuilder()
                        .setTitle("🏓 Pong!")
                        .setColor(discord_js_1.Colors.Red)
                ],
                components: [
                    new discord_js_1.ActionRowBuilder()
                        .setComponents(new discord_js_1.ButtonBuilder()
                        .setCustomId("latencyButton")
                        .setLabel("💢 Ver Latência")
                        .setStyle(discord_js_1.ButtonStyle.Secondary))
                ],
                ephemeral: true
            });
        });
    }
};
const { data, execute } = command;
exports.data = data;
exports.execute = execute;
