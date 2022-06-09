import * as anchor from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";
declare const getNonce: (hostPDA: PublicKey, provider: anchor.AnchorProvider) => Promise<any>;
export default getNonce;
