import { clusterApiUrl, Connection, Keypair } from "@solana/web3.js";
import { describe } from "mocha";
import { getAllEvents } from "../src/helpers/getAllEvents";
// import getEvent from "../src/helpers/getEvent";
import * as anchor from "@project-serum/anchor";
import NodeWallet from "@project-serum/anchor/dist/cjs/nodewallet";
import { Program } from "@project-serum/anchor";
import { idl, PROGRAM_ID } from "../src";
const v8 = require("v8");
describe("get all accounts", () => {
  false &&
    it("should get all account info", async () => {
      const connection = new Connection(clusterApiUrl("devnet"));
      const wallet = new NodeWallet(Keypair.generate());
      const provider = new anchor.AnchorProvider(connection, wallet, {
        preflightCommitment: "recent",
      });
      // const initialStats = v8.getHeapStatistics();

      // const totalHeapSizeThreshold = (initialStats.heap_size_limit * 85) / 100;
      // console.log(
      //   "totalHeapSizeThreshold: " + totalHeapSizeThreshold,
      //   initialStats
      // );
      const accountinfo = await getAllEvents(connection);
      // console.log("there");
      console.log(accountinfo);
      // const program = new Program(idl as anchor.Idl, PROGRAM_ID, provider);
      // console.log("s");
      // console.log(await program.account.eventAccount.all());
    });
});
