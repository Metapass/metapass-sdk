/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */
import * as web3 from '@solana/web3.js';
import * as beet from '@metaplex-foundation/beet';
/**
 * @category Instructions
 * @category AddPartners
 * @category generated
 */
export declare type AddPartnersInstructionArgs = {
    partner: web3.PublicKey;
};
/**
 * @category Instructions
 * @category AddPartners
 * @category generated
 */
export declare const addPartnersStruct: beet.BeetArgsStruct<AddPartnersInstructionArgs & {
    instructionDiscriminator: number[];
}>;
/**
 * Accounts required by the _addPartners_ instruction
 *
 * @property [_writable_] adminAccount
 * @property [_writable_, **signer**] adminAuthority
 * @category Instructions
 * @category AddPartners
 * @category generated
 */
export declare type AddPartnersInstructionAccounts = {
    adminAccount: web3.PublicKey;
    adminAuthority: web3.PublicKey;
};
export declare const addPartnersInstructionDiscriminator: number[];
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
export declare function createAddPartnersInstruction(accounts: AddPartnersInstructionAccounts, args: AddPartnersInstructionArgs): web3.TransactionInstruction;
