/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */
import * as beet from '@metaplex-foundation/beet';
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
 * @category Instructions
 * @category InitializeHost
 * @category generated
 */
export declare const initializeHostStruct: beet.FixableBeetArgsStruct<InitializeHostInstructionArgs & {
    instructionDiscriminator: number[];
}>;
/**
 * Accounts required by the _initializeHost_ instruction
 *
 * @property [_writable_] eventHostAccount
 * @property [_writable_, **signer**] authority
 * @category Instructions
 * @category InitializeHost
 * @category generated
 */
export declare type InitializeHostInstructionAccounts = {
    eventHostAccount: web3.PublicKey;
    authority: web3.PublicKey;
    systemProgram?: web3.PublicKey;
};
export declare const initializeHostInstructionDiscriminator: number[];
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
export declare function createInitializeHostInstruction(accounts: InitializeHostInstructionAccounts, args: InitializeHostInstructionArgs, programId?: web3.PublicKey): web3.TransactionInstruction;
