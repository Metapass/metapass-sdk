import { publicKey } from "@metaplex-foundation/beet-solana";
import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  Transaction,
} from "@solana/web3.js";
import { createInitializeEventInstruction, PROGRAM_ID } from "../src";
import * as anchor from "@project-serum/anchor";
import NodeWallet from "@project-serum/anchor/dist/cjs/nodewallet";
describe.skip("create event", () => {
  it("should create an event", async () => {
    const key = Keypair.generate();
    const wallet = new NodeWallet(key);

    const provider = new anchor.AnchorProvider(
      new Connection("https://api.devnet.solana.com"),
      wallet,
      {
        preflightCommitment: "recent",
      }
    );
    try {
      console.log(wallet.publicKey.toBase58());
      await provider.connection.requestAirdrop(
        wallet.publicKey,
        2 * LAMPORTS_PER_SOL
      );
    } catch (error) {
      console.log("🔴", error);
    }
    console.log(
      await provider.connection.getBalance(wallet.publicKey),
      "funds"
    );
    const publicKey = wallet.publicKey;
    if (!wallet.publicKey) return;

    const getHostPDA = async () => {
      const [hostPDA, hostBump] = await PublicKey.findProgramAddress(
        [
          anchor.utils.bytes.utf8.encode("event-host-key"),
          publicKey.toBuffer(),
        ],
        PROGRAM_ID
      );

      return hostPDA;
    };
    const getEventPDA = async (nonce: number) => {
      const [eventPDA, _] = await PublicKey.findProgramAddress(
        [
          anchor.utils.bytes.utf8.encode("event_account"),
          (publicKey as any)?.toBuffer(),
          new anchor.BN(nonce).toArrayLike(Buffer),
        ],
        PROGRAM_ID
      );
      return eventPDA;
    };

    let hostPDA = await getHostPDA();
    // let nonce = await getNonce(hostPDA as PublicKey)
    let eventPDA = await getEventPDA(0);
    const accounts = {
      eventAccount: eventPDA,
      authority: publicKey,
      eventHostAccount: hostPDA,
    };
    const transactionData = {
      title: "event.title",
      description: " event.description",
      uri: "event.solanaUr" as string,
      link: "event.link",
      fee: new anchor.BN(0.01 as number),
      seats: new anchor.BN(10 as number),
      date: "event.dat",
      venue: " event.type",

      isCutPayedByCreator: true,
      isCustomSplToken: true,
      customSplToken: new PublicKey(
        "7gjQaUHVdP8m7BvrFWyPkM7L3H9p4umwm3F56q1qyLk1"
      ),
    };
    const txnInstruction = createInitializeEventInstruction(accounts, {
      createEventInfo: transactionData,
    });

    console.log(
      await provider.connection.getBalance(wallet.publicKey),
      "funds"
    );
    const transaction = new Transaction().add(txnInstruction);
    try {
      const tx = await provider.connection.sendTransaction(transaction, [key], {
        preflightCommitment: "confirmed",
      });
      console.log(tx, "tx");
    } catch (error) {
      console.log("⚡️", error);
    }
  });
});
