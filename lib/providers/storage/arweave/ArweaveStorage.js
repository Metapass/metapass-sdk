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
exports.ArweaveStorage = void 0;
const axios_1 = __importDefault(require("axios"));
const form_data_1 = __importDefault(require("form-data"));
const ARWEAVE_URL = 'https://arweave.net';
const LAMPORT_MULTIPLIER = 10 ** 9;
const WINSTON_MULTIPLIER = 10 ** 12;
class ArweaveStorage {
    constructor({ endpoint, env }) {
        this.endpoint = endpoint;
        this.env = env;
    }
    getAssetCostToStore(files, arweaveRate, solanaRate) {
        return __awaiter(this, void 0, void 0, function* () {
            const buffers = Array.from(files.values());
            const totalBytes = buffers.reduce((sum, f) => (sum += f.byteLength), 0);
            const txnFeeInWinstons = parseInt(yield (yield (0, axios_1.default)(`${ARWEAVE_URL}/price/0`)).data);
            const byteCostInWinstons = parseInt(yield (yield (0, axios_1.default)(`${ARWEAVE_URL}/price/${totalBytes.toString()}`)).data);
            const totalArCost = (txnFeeInWinstons * buffers.length + byteCostInWinstons) / WINSTON_MULTIPLIER;
            // To figure out how many lamports are required, multiply ar byte cost by this number
            const arMultiplier = arweaveRate / solanaRate;
            // We also always make a manifest file, which, though tiny, needs payment.
            return LAMPORT_MULTIPLIER * totalArCost * arMultiplier * 1.1;
        });
    }
    upload(files, mintKey, txid) {
        return __awaiter(this, void 0, void 0, function* () {
            const fileEntries = Array.from(files.entries());
            const tags = fileEntries.reduce((acc, [fileName]) => {
                acc[fileName] = [{ name: 'mint', value: mintKey }];
                return acc;
            }, {});
            const body = new form_data_1.default();
            body.append('tags', JSON.stringify(tags));
            body.append('transaction', txid);
            body.append('env', this.env);
            fileEntries.map(([, file]) => {
                body.append('file[]', file);
            });
            // TODO: I hate to do this, but it seems to be like an upstream problem:
            // https://github.com/jimmywarting/FormData/issues/133
            // I'll make sure to track it. - Danny
            const response = yield axios_1.default.post(this.endpoint, body);
            if (response.data.error) {
                return Promise.reject(new Error(response.data.error));
            }
            return response.data;
        });
    }
}
exports.ArweaveStorage = ArweaveStorage;
