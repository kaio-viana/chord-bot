"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDuration = formatDuration;
function formatDuration(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formattedMinutes = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
    const formattedSeconds = seconds < 10 ? '0' + seconds.toString() : seconds.toString();
    return `${formattedMinutes}:${formattedSeconds}`;
}
