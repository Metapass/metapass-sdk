/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */
import * as beet from "@metaplex-foundation/beet";
import * as web3 from "@solana/web3.js";
import { CreateEventInput } from "../types/CreateEventInput";
/**
 * @category Instructions
 * @category InitializeEvent
 * @category generated
 */
export declare type InitializeEventInstructionArgs = {
    createEventInfo: CreateEventInput;
};
/**
 * @category Instructions
 * @category InitializeEvent
 * @category generated
 */
export declare const initializeEventStruct: beet.FixableBeetArgsStruct<InitializeEventInstructionArgs & {
    instructionDiscriminator: number[];
}>;
/**
 * Accounts required by the _initializeEvent_ instruction
 *
 * @property [_writable_] eventAccount
 * @property [_writable_, **signer**] authority
 * @property [_writable_] eventHostAccount
 * @category Instructions
 * @category InitializeEvent
 * @category generated
 */
export declare type InitializeEventInstructionAccounts = {
    eventAccount: web3.PublicKey;
    authority: web3.PublicKey;
    eventHostAccount: web3.PublicKey;
    systemProgram?: web3.PublicKey;
};
export declare const initializeEventInstructionDiscriminator: number[];
/**
 * Creates a _InitializeEvent_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category InitializeEvent
 * @category generated
 */
export declare function createInitializeEventInstruction(accounts: InitializeEventInstructionAccounts, args: InitializeEventInstructionArgs, programId?: web3.PublicKey): web3.TransactionInstruction;
