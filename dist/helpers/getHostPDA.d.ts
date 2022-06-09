import { PublicKey } from "@solana/web3.js";
declare const getHostPDA: (hostKey: PublicKey) => Promise<PublicKey>;
export default getHostPDA;
