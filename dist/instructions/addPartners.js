"use strict";
/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAddPartnersInstruction = void 0;
const web3 = __importStar(require("@solana/web3.js"));
const beetSolana = __importStar(require("@metaplex-foundation/beet-solana"));
const beet = __importStar(require("@metaplex-foundation/beet"));
/**
 * @category Instructions
 * @category AddPartners
 * @category generated
 */
const addPartnersStruct = new beet.BeetArgsStruct([
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['partner', beetSolana.publicKey],
], 'AddPartnersInstructionArgs');
const addPartnersInstructionDiscriminator = [130, 213, 217, 119, 251, 82, 6, 73];
/**
 * Creates a _AddPartners_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category AddPartners
 * @category generated
 */
function createAddPartnersInstruction(accounts, args) {
    const { adminAccount, adminAuthority } = accounts;
    const [data] = addPartnersStruct.serialize(Object.assign({ instructionDiscriminator: addPartnersInstructionDiscriminator }, args));
    const keys = [
        {
            pubkey: adminAccount,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: adminAuthority,
            isWritable: true,
            isSigner: true,
        },
    ];
    const ix = new web3.TransactionInstruction({
        programId: new web3.PublicKey('Crvo7H5Qupi7pD63wyyXfoPbzAkU9Hbqwno7xTrXLbKo'),
        keys,
        data,
    });
    return ix;
}
exports.createAddPartnersInstruction = createAddPartnersInstruction;