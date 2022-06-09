import * as anchor from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";
declare const getEvent: (eventPDA: PublicKey, provider: anchor.AnchorProvider) => Promise<import("@project-serum/anchor/dist/cjs/program/namespace/types").TypeDef<import("@project-serum/anchor/dist/cjs/idl").IdlAccountDef, anchor.IdlTypes<anchor.Idl>> | undefined>;
export default getEvent;
