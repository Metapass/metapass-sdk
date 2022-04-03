"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = exports.ENV = exports.ChainId = void 0;
const web3_js_1 = require("@solana/web3.js");
var ChainId;
(function (ChainId) {
    ChainId[ChainId["MainnetBeta"] = 101] = "MainnetBeta";
    ChainId[ChainId["Testnet"] = 102] = "Testnet";
    ChainId[ChainId["Devnet"] = 103] = "Devnet";
})(ChainId = exports.ChainId || (exports.ChainId = {}));
exports.ENV = {
    devnet: {
        endpoint: (0, web3_js_1.clusterApiUrl)("devnet"),
        ChainId: ChainId.Devnet,
    },
    "mainnet-beta": {
        endpoint: "https://api.metaplex.solana.com/",
        ChainId: ChainId.MainnetBeta,
    },
    "mainnet-beta (Solana)": {
        endpoint: "https://api.mainnet-beta.solana.com",
        ChainId: ChainId.MainnetBeta,
    },
    "mainnet-beta (Serum)": {
        endpoint: "https://solana-api.projectserum.com/",
        ChainId: ChainId.MainnetBeta,
    },
    testnet: {
        endpoint: (0, web3_js_1.clusterApiUrl)("testnet"),
        ChainId: ChainId.Testnet,
    },
};
class Connection extends web3_js_1.Connection {
    constructor(endpoint = "mainnet-beta", commitment) {
        if (endpoint in exports.ENV)
            endpoint = exports.ENV[endpoint].endpoint;
        super(endpoint, commitment);
    }
}
exports.Connection = Connection;
