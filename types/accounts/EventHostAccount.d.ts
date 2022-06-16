/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */
/// <reference types="node" />
import * as web3 from '@solana/web3.js';
import * as beet from '@metaplex-foundation/beet';
import { EventHost } from '../types/EventHost';
/**
 * Arguments used to create {@link EventHostAccount}
 * @category Accounts
 * @category generated
 */
export declare type EventHostAccountArgs = {
    eventHostStruct: EventHost;
};
/**
 * Holds the data for the {@link EventHostAccount} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export declare class EventHostAccount implements EventHostAccountArgs {
    readonly eventHostStruct: EventHost;
    private constructor();
    /**
     * Creates a {@link EventHostAccount} instance from the provided args.
     */
    static fromArgs(args: EventHostAccountArgs): EventHostAccount;
    /**
     * Deserializes the {@link EventHostAccount} from the data of the provided {@link web3.AccountInfo}.
     * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
     */
    static fromAccountInfo(accountInfo: web3.AccountInfo<Buffer>, offset?: number): [EventHostAccount, number];
    /**
     * Retrieves the account info from the provided address and deserializes
     * the {@link EventHostAccount} from its data.
     *
     * @throws Error if no account info is found at the address or if deserialization fails
     */
    static fromAccountAddress(connection: web3.Connection, address: web3.PublicKey): Promise<EventHostAccount>;
    /**
     * Deserializes the {@link EventHostAccount} from the provided data Buffer.
     * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
     */
    static deserialize(buf: Buffer, offset?: number): [EventHostAccount, number];
    /**
     * Serializes the {@link EventHostAccount} into a Buffer.
     * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
     */
    serialize(): [Buffer, number];
    /**
     * Returns the byteSize of a {@link Buffer} holding the serialized data of
     * {@link EventHostAccount} for the provided args.
     *
     * @param args need to be provided since the byte size for this account
     * depends on them
     */
    static byteSize(args: EventHostAccountArgs): number;
    /**
     * Fetches the minimum balance needed to exempt an account holding
     * {@link EventHostAccount} data from rent
     *
     * @param args need to be provided since the byte size for this account
     * depends on them
     * @param connection used to retrieve the rent exemption information
     */
    static getMinimumBalanceForRentExemption(args: EventHostAccountArgs, connection: web3.Connection, commitment?: web3.Commitment): Promise<number>;
    /**
     * Returns a readable version of {@link EventHostAccount} properties
     * and can be used to convert to JSON and/or logging
     */
    pretty(): {
        eventHostStruct: EventHost;
    };
}
/**
 * @category Accounts
 * @category generated
 */
export declare const eventHostAccountBeet: beet.FixableBeetStruct<EventHostAccount, EventHostAccountArgs & {
    accountDiscriminator: number[];
}>;
