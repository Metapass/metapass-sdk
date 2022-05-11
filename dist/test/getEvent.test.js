"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const chai_1 = require("chai");
const web3_js_1 = require("@solana/web3.js");
const anchor = __importStar(require("@project-serum/anchor"));
const getEventPda_1 = __importDefault(require("../src/helpers/getEventPda"));
const getEvent_1 = __importDefault(require("../src/helpers/getEvent"));
const nodewallet_1 = __importDefault(require("@project-serum/anchor/dist/cjs/nodewallet"));
require("dotenv").config();
describe("getEvent", () => __awaiter(void 0, void 0, void 0, function* () {
    it("get the event data", () => __awaiter(void 0, void 0, void 0, function* () {
        const eventPDA = yield (0, getEventPda_1.default)(0, new web3_js_1.PublicKey("B641ooUCSG8ToLRki3YuxWMiNj6BS5c4eSM1rWcSazeV"));
        const wallet = new nodewallet_1.default(web3_js_1.Keypair.generate());
        const provider = new anchor.AnchorProvider(new web3_js_1.Connection("https://api.devnet.solana.com"), wallet, {
            preflightCommitment: "recent",
        });
        const eventData = (yield (0, getEvent_1.default)(eventPDA, provider));
        console.log(typeof eventData);
        (0, chai_1.expect)(eventData.title).equal("Coinbase Event");
    }));
}));
