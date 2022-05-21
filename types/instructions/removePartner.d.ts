/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */
import * as web3 from '@solana/web3.js';
/**
 * @category Instructions
 * @category RemovePartner
 * @category generated
 */
export declare type RemovePartnerInstructionArgs = {
    address: web3.PublicKey;
};
/**
 * Accounts required by the _removePartner_ instruction
 * @category Instructions
 * @category RemovePartner
 * @category generated
 */
export declare type RemovePartnerInstructionAccounts = {
    adminAccount: web3.PublicKey;
    adminAuthority: web3.PublicKey;
};
/**
 * Creates a _RemovePartner_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category RemovePartner
 * @category generated
 */
export declare function createRemovePartnerInstruction(accounts: RemovePartnerInstructionAccounts, args: RemovePartnerInstructionArgs): web3.TransactionInstruction;
