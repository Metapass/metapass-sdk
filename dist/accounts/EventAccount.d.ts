/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */
/// <reference types="node" />
import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import * as beetSolana from '@metaplex-foundation/beet-solana';
import { EventHost } from '../types/EventHost';
/**
 * Arguments used to create {@link EventAccount}
 * @category Accounts
 * @category generated
 */
export declare type EventAccountArgs = {
    title: string;
    description: string;
    uri: string;
    link: string;
    fee: beet.bignum;
    seats: beet.bignum;
    occupiedSeats: beet.bignum;
    date: string;
    collection: web3.PublicKey;
    venue: string;
    authority: web3.PublicKey;
    creators: web3.PublicKey[];
    eventHost: EventHost;
    eventNonce: beet.bignum;
    bump: number;
    isCutPayedByCreator: boolean;
    isCustomSplToken: boolean;
    customSplToken: web3.PublicKey;
};
export declare const eventAccountDiscriminator: number[];
/**
 * Holds the data for the {@link EventAccount} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export declare class EventAccount implements EventAccountArgs {
    readonly title: string;
    readonly description: string;
    readonly uri: string;
    readonly link: string;
    readonly fee: beet.bignum;
    readonly seats: beet.bignum;
    readonly occupiedSeats: beet.bignum;
    readonly date: string;
    readonly collection: web3.PublicKey;
    readonly venue: string;
    readonly authority: web3.PublicKey;
    readonly creators: web3.PublicKey[];
    readonly eventHost: EventHost;
    readonly eventNonce: beet.bignum;
    readonly bump: number;
    readonly isCutPayedByCreator: boolean;
    readonly isCustomSplToken: boolean;
    readonly customSplToken: web3.PublicKey;
    private constructor();
    /**
     * Creates a {@link EventAccount} instance from the provided args.
     */
    static fromArgs(args: EventAccountArgs): EventAccount;
    /**
     * Deserializes the {@link EventAccount} from the data of the provided {@link web3.AccountInfo}.
     * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
     */
    static fromAccountInfo(accountInfo: web3.AccountInfo<Buffer>, offset?: number): [EventAccount, number];
    /**
     * Retrieves the account info from the provided address and deserializes
     * the {@link EventAccount} from its data.
     *
     * @throws Error if no account info is found at the address or if deserialization fails
     */
    static fromAccountAddress(connection: web3.Connection, address: web3.PublicKey): Promise<EventAccount>;
    /**
     * Provides a {@link web3.Connection.getProgramAccounts} config builder,
     * to fetch accounts matching filters that can be specified via that builder.
     *
     * @param programId - the program that owns the accounts we are filtering
     */
    static gpaBuilder(programId?: web3.PublicKey): beetSolana.GpaBuilder<EventAccountArgs & {
        accountDiscriminator: number[];
    }>;
    /**
     * Deserializes the {@link EventAccount} from the provided data Buffer.
     * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
     */
    static deserialize(buf: Buffer, offset?: number): [EventAccount, number];
    /**
     * Serializes the {@link EventAccount} into a Buffer.
     * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
     */
    serialize(): [Buffer, number];
    /**
     * Returns the byteSize of a {@link Buffer} holding the serialized data of
     * {@link EventAccount} for the provided args.
     *
     * @param args need to be provided since the byte size for this account
     * depends on them
     */
    static byteSize(args: EventAccountArgs): number;
    /**
     * Fetches the minimum balance needed to exempt an account holding
     * {@link EventAccount} data from rent
     *
     * @param args need to be provided since the byte size for this account
     * depends on them
     * @param connection used to retrieve the rent exemption information
     */
    static getMinimumBalanceForRentExemption(args: EventAccountArgs, connection: web3.Connection, commitment?: web3.Commitment): Promise<number>;
    /**
     * Returns a readable version of {@link EventAccount} properties
     * and can be used to convert to JSON and/or logging
     */
    pretty(): {
        title: string;
        description: string;
        uri: string;
        link: string;
        fee: number | {
            toNumber: () => number;
        };
        seats: number | {
            toNumber: () => number;
        };
        occupiedSeats: number | {
            toNumber: () => number;
        };
        date: string;
        collection: string;
        venue: string;
        authority: string;
        creators: web3.PublicKey[];
        eventHost: EventHost;
        eventNonce: number | {
            toNumber: () => number;
        };
        bump: number;
        isCutPayedByCreator: boolean;
        isCustomSplToken: boolean;
        customSplToken: string;
    };
}
/**
 * @category Accounts
 * @category generated
 */
export declare const eventAccountBeet: beet.FixableBeetStruct<EventAccount, EventAccountArgs & {
    accountDiscriminator: number[];
}>;
