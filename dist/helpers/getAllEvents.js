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
exports.getAllEvents = void 0;
const web3_js_1 = require("@solana/web3.js");
const accounts_1 = require("../accounts");
const getAllEvents = (connection) => __awaiter(void 0, void 0, void 0, function* () {
    let events = [];
    try {
        const accounts = yield connection.getProgramAccounts(new web3_js_1.PublicKey("Crvo7H5Qupi7pD63wyyXfoPbzAkU9Hbqwno7xTrXLbKo"));
        accounts.map((account) => {
            try {
                events.push(accounts_1.EventAccount.fromAccountInfo(account.account)[0]);
            }
            catch (error) { }
        });
    }
    catch (e) {
        const result = e;
        console.log("Error in file getEvent.ts: ", result.message);
        console.log("Ping us in our discord server, devs wil definitely do something :)");
    }
    return events;
});
exports.getAllEvents = getAllEvents;
