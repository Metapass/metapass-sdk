import { assert, expect } from "chai";
import { Connection, PublicKey, Keypair } from "@solana/web3.js";
import * as anchor from "@project-serum/anchor";
import { PROGRAM_ID } from "../src";
import { getEventPDA } from "../src/helpers/getEventPDA";
import { getEvent } from "../src/helpers/getEvent";
import NodeWallet from "@project-serum/anchor/dist/cjs/nodewallet";
import { EventType } from "../src/types/Event";

require("dotenv").config();
describe.skip("getEvent", async () => {
  it("get the event data", async () => {
    const eventPDA = await getEventPDA(
      0,
      new PublicKey("B641ooUCSG8ToLRki3YuxWMiNj6BS5c4eSM1rWcSazeV")
    );
    const wallet = new NodeWallet(Keypair.generate());
    const provider = new anchor.AnchorProvider(
      new Connection("https://api.devnet.solana.com"),
      wallet,
      {
        preflightCommitment: "recent",
      }
    );
    const eventData: EventType = (await getEvent(
      eventPDA,
      provider
    )) as EventType;
    console.log(eventData);
    expect(eventData.title).equal("Coinbase Event");
  });
});
