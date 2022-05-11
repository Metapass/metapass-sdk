import * as anchor from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";
import { PROGRAM_ID } from "..";
const idl: anchor.Idl = require("../idl/idl.json");
import { send } from "@ayshptk/msngr";

const getEvent = async (
  eventPDA: PublicKey,
  provider: anchor.AnchorProvider
) => {
  try {
    if (eventPDA && provider) {
      const program = new anchor.Program(idl, PROGRAM_ID, provider);
      const eventData = await program.account.eventccount.fetch(eventPDA);
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
export default getEvent;
