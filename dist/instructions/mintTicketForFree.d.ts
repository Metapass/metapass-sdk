/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */
import * as beet from "@metaplex-foundation/beet";
import * as web3 from "@solana/web3.js";
/**
 * @category Instructions
 * @category MintTicketForFree
 * @category generated
 */
export declare type MintTicketForFreeInstructionArgs = {
    uri: string;
};
/**
 * @category Instructions
 * @category MintTicketForFree
 * @category generated
 */
export declare const mintTicketForFreeStruct: beet.FixableBeetArgsStruct<MintTicketForFreeInstructionArgs & {
    instructionDiscriminator: number[];
}>;
/**
 * Accounts required by the _mintTicketForFree_ instruction
 *
 * @property [_writable_, **signer**] mintAuthority
 * @property [_writable_] eventAccount
 * @property [_writable_, **signer**] mint
 * @property [_writable_] metadata
 * @property [_writable_] tokenAccount
 * @property [] tokenMetadataProgram
 * @property [_writable_] payer
 * @property [_writable_] masterEdition
 * @property [_writable_] eventHost
 * @property [_writable_] eventHostKey
 * @property [_writable_] adminAccount
 * @property [_writable_] adminKey
 * @property [] associatedTokenProgram
 * @category Instructions
 * @category MintTicketForFree
 * @category generated
 */
export declare type MintTicketForFreeInstructionAccounts = {
    mintAuthority: web3.PublicKey;
    eventAccount: web3.PublicKey;
    mint: web3.PublicKey;
    tokenProgram?: web3.PublicKey;
    metadata: web3.PublicKey;
    tokenAccount: web3.PublicKey;
    tokenMetadataProgram: web3.PublicKey;
    payer: web3.PublicKey;
    systemProgram?: web3.PublicKey;
    rent?: web3.PublicKey;
    masterEdition: web3.PublicKey;
    eventHost: web3.PublicKey;
    eventHostKey: web3.PublicKey;
    adminAccount: web3.PublicKey;
    adminKey: web3.PublicKey;
    associatedTokenProgram: web3.PublicKey;
};
export declare const mintTicketForFreeInstructionDiscriminator: number[];
/**
 * Creates a _MintTicketForFree_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category MintTicketForFree
 * @category generated
 */
export declare function createMintTicketForFreeInstruction(accounts: MintTicketForFreeInstructionAccounts, args: MintTicketForFreeInstructionArgs, programId?: web3.PublicKey): web3.TransactionInstruction;
