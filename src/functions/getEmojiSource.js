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
exports.getEmojiSource = getEmojiSource;
function getEmojiSource(source) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (source == "spotify") {
                return "<:spotify:1271636387426340934>";
            }
            else if (source == "soundcloud") {
                return "<:soundcloud:1271636676887842848>";
            }
            else if (source == "youtube") {
                return "<:youtube:1271636445781823539>";
            }
            else {
                return "<:play:1271643171058880594>";
            }
        }
        catch (error) {
            return "<:play:1271643171058880594>";
        }
    });
}
