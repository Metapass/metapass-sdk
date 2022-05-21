/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */
import * as web3 from '@solana/web3.js';
/**
 * @category Instructions
 * @category InitializeHost
 * @category generated
 */
export declare type InitializeHostInstructionArgs = {
    displayName: string;
    profileImg: string;
};
/**
 * Accounts required by the _initializeHost_ instruction
 * @category Instructions
 * @category InitializeHost
 * @category generated
 */
export declare type InitializeHostInstructionAccounts = {
    eventHostAccount: web3.PublicKey;
    authority: web3.PublicKey;
};
/**
 * Creates a _InitializeHost_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category InitializeHost
 * @category generated
 */
export declare function createInitializeHostInstruction(accounts: InitializeHostInstructionAccounts, args: InitializeHostInstructionArgs): web3.TransactionInstruction;
