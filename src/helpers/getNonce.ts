import * as anchor from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";
// import { PROGRAM_ID } from "..";
import { idl } from "../idl";

export const getNonce = async (
  hostPDA: PublicKey,
  provider: anchor.AnchorProvider
) => {
  try {
    if (hostPDA && provider) {
      const program = new anchor.Program(
        idl as anchor.Idl,
        new PublicKey("Crvo7H5Qupi7pD63wyyXfoPbzAkU9Hbqwno7xTrXLbKo"),
        provider
      );
      const hostData = await program.account.eventHostAccount.fetch(hostPDA);
      return hostData.eventHostStruct.eventCount;
    } else throw new Error("hostPDA or provider is undefined");
  } catch (e) {
    console.log(e);
  }
};
