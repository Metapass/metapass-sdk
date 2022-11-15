/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */
import * as web3 from "@solana/web3.js";
import * as beet from "@metaplex-foundation/beet";
/**
 * @category Instructions
 * @category RemovePartner
 * @category generated
 */
export declare type RemovePartnerInstructionArgs = {
    address: web3.PublicKey;
};
/**
 * @category Instructions
 * @category RemovePartner
 * @category generated
 */
export declare const removePartnerStruct: beet.BeetArgsStruct<RemovePartnerInstructionArgs & {
    instructionDiscriminator: number[];
}>;
/**
 * Accounts required by the _removePartner_ instruction
 *
 * @property [_writable_] adminAccount
 * @property [_writable_, **signer**] adminAuthority
 * @category Instructions
 * @category RemovePartner
 * @category generated
 */
export declare type RemovePartnerInstructionAccounts = {
    adminAccount: web3.PublicKey;
    adminAuthority: web3.PublicKey;
};
export declare const removePartnerInstructionDiscriminator: number[];
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
export declare function createRemovePartnerInstruction(accounts: RemovePartnerInstructionAccounts, args: RemovePartnerInstructionArgs, programId?: web3.PublicKey): web3.TransactionInstruction;
