import { PublicKey } from "@solana/web3.js";
export declare const getEventPDA: (nonce: number, hostKey: PublicKey) => Promise<PublicKey>;
