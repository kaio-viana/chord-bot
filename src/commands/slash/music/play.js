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
        .setName("play")
        .setDescription("[ Music ] - Plays a song")
        .setDescriptionLocalizations({ "pt-BR": "[ Música ] - Reproduz música" })
        .addStringOption(option => option
        .setName("query")
        .setDescription("Enter the name or URL of a song")
        .setDescriptionLocalizations({ "pt-BR": "Insira o nome ou URL de uma música" })
        .setMinLength(1)
        .setRequired(true))
        .addIntegerOption(option => option
        .setName("volume")
        .setDescription("Enter the volume percentage")
        .setDescriptionLocalizations({ "pt-BR": "Insira a porcentagem do volume" })
        .setMinValue(1)
        .setMaxValue(100))
        .addStringOption(option => option
        .setName("source")
        .setNameLocalizations({ "pt-BR": "fonte" })
        .setDescription("Select the source you want to play on")
        .setDescriptionLocalizations({ "pt-BR": "Selecione a fonte na qual você deseja tocar" })
        .setChoices({ name: "Spotify", value: "spsearch" }, { name: "Youtube", value: "ytsearch" }, { name: "Youtube Music", value: "ytmsearch" }, { name: "Soundcloud", value: "scsearch" }))
        .setContexts(0),
    execute(interaction, client) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const member = interaction.member;
            const guild = interaction.guild;
            const query = interaction.options.getString("query");
            const percentage = interaction.options.getInteger("volume");
            const source = interaction.options.getString("source") || null;
            if (!member.voice.channelId) {
                return interaction.reply({ content: "❌ Você precisa estar em um canal de voz.", ephemeral: true });
            }
            const player = client.lavalink.getPlayer(guild.id) || client.lavalink.createPlayer({
                guildId: guild.id,
                voiceChannelId: member.voice.channelId,
                textChannelId: interaction.channelId,
                selfDeaf: true,
                selfMute: false,
                volume: percentage
            });
            const connected = player.connected;
            if (!connected) {
                yield player.connect();
            }
            const response = yield player.search({ query: query, source: source }, interaction.user);
            if (!response || !((_a = response.tracks) === null || _a === void 0 ? void 0 : _a.length)) {
                return interaction.reply({ content: "❌ Nenhuma música encontrada.", ephemeral: true });
            }
            yield player.queue.add(response.tracks[0]);
            if (!player.playing) {
                yield player.play();
            }
            let emoji = "";
            switch (response.tracks[0].info.sourceName) {
                case "youtube":
                    emoji = "";
                case "youtubemusic":
                    emoji = "";
                case "soundcloud":
                    emoji = "";
                case "spotify":
                    emoji = "";
                default:
                    emoji = "";
            }
            yield interaction.reply({
                embeds: [
                    new discord_js_1.EmbedBuilder()
                        .setDescription("Adicionado")
                ]
            });
        });
    }
};
const { data, execute } = command;
exports.data = data;
exports.execute = execute;
