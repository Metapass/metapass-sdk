import * as anchor from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";

import { idl } from "../idl";

export const getEvent = async (
  eventPDA: PublicKey,
  provider: anchor.AnchorProvider
) => {
  try {
    if (eventPDA && provider) {
      const program = new anchor.Program(
        idl as anchor.Idl,
        new PublicKey("Crvo7H5Qupi7pD63wyyXfoPbzAkU9Hbqwno7xTrXLbKo"),
        provider
      );
      const eventData = await program.account.eventAccount.fetch(eventPDA);
      return eventData;
    } else throw new Error("eventPDA or provider is undefined");
  } catch (e: unknown) {
    const result = e as Error;

    console.log("Error in file getEvent.ts: ", result.message);
    console.log(
      "Ping us in our discord server, devs wil definitely do something :)"
    );
  }
};
