"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("./src/structures/Client");
require("dotenv/config");
require("colors");
const client = new Client_1.Bot();
client.on('error', (error) => {
    console.log(error);
});
process.on('unhandledRejection', (reason, p) => {
    console.log('[ Client ] Error Detected.'.red);
    console.log(reason, p);
});
process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log('[ Client ] Error Detected.'.red);
    console.log(err, origin);
});
process.on('uncaughtException', (err, origin) => {
    console.log('[ Client ] Error Detected.'.red);
    console.log(err, origin);
});
client.start();
