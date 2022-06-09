import { PublicKey } from "@solana/web3.js";
declare const getEventPDA: (nonce: number, hostKey: PublicKey) => Promise<PublicKey>;
export default getEventPDA;
