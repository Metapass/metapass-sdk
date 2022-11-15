import { web3 } from "@project-serum/anchor";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  getAssociatedTokenAddress,
} from "@solana/spl-token";
import { clusterApiUrl, Connection, Keypair, PublicKey } from "@solana/web3.js";
import {
  createMintTicketForFreeInstruction,
  getAdminPDA,
  getHostPDA,
  MintTicketForFreeInstructionAccounts,
} from "../src";
import fs from "fs";
import NodeWallet from "@project-serum/anchor/dist/cjs/nodewallet";
describe.skip("mint it", async () => {
  it.skip("should mint", async () => {
    const TOKEN_METADATA_PROGRAM_ID = new web3.PublicKey(
      "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
    );
    const pk = fs.readFileSync("keys/id.json", {
      encoding: "utf-8",
    });
    const payer = Keypair.fromSecretKey(Uint8Array.from(JSON.parse(pk)));
    // const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new web3.PublicKey(
    //   "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
    // );
    // event.customSPLToken =
    //     'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'
    // const customSPL = new web3.PublicKey(
    //   "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
    // );
    const getMetadata = async (
      mint: web3.PublicKey
    ): Promise<web3.PublicKey> => {
      return (
        await web3.PublicKey.findProgramAddress(
          [
            Buffer.from("metadata"),
            TOKEN_METADATA_PROGRAM_ID.toBuffer(),
            mint.toBuffer(),
          ],
          TOKEN_METADATA_PROGRAM_ID
        )
      )[0];
    };

    const getMasterEdition = async (
      mint: web3.PublicKey
    ): Promise<web3.PublicKey> => {
      return (
        await web3.PublicKey.findProgramAddress(
          [
            Buffer.from("metadata"),
            TOKEN_METADATA_PROGRAM_ID.toBuffer(),
            mint.toBuffer(),
            Buffer.from("edition"),
          ],
          TOKEN_METADATA_PROGRAM_ID
        )
      )[0];
    };
    const mintAuthority = new PublicKey(
      "Bu3mTU2X7SoZUkyNU37jispVqRLkSSwiQuN6rGbvQx9f"
    );
    const mint = web3.Keypair.generate();
    const metadataAddress = await getMetadata(mint.publicKey);
    const masterEdition = await getMasterEdition(mint.publicKey);
    const NftTokenAccount: web3.PublicKey = await getAssociatedTokenAddress(
      mint.publicKey,
      mintAuthority
    );
    const hostPDA: web3.PublicKey = await getHostPDA(
      new web3.PublicKey("DZFbytJWS5BMgaaJQ3LFvqMcm6mqaKqorgT7ZbhDHGY8")
    );
    const adminPDA: web3.PublicKey = await getAdminPDA();
    const accounts: MintTicketForFreeInstructionAccounts = {
      mintAuthority: mintAuthority as web3.PublicKey,
      eventAccount: new web3.PublicKey(
        "FYHVVfz6cRVRUAdbUaVQSmPzhuPWSzYiMdFNFQxsyzN8"
      ),
      mint: mint.publicKey,
      metadata: metadataAddress,
      tokenAccount: NftTokenAccount,
      tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
      payer: payer.publicKey as web3.PublicKey,
      masterEdition: masterEdition,
      eventHost: hostPDA,
      eventHostKey: new web3.PublicKey(
        "DZFbytJWS5BMgaaJQ3LFvqMcm6mqaKqorgT7ZbhDHGY8"
      ),
      adminAccount: adminPDA,
      adminKey: new web3.PublicKey(
        "4ZVmtujXR4PQVT73r43AD3qKHoUgAvAcw69djR9UP5Pw"
      ),
      // customSplToken: customSPL,
      // customSplTokenProgram: TOKEN_PROGRAM_ID,
      // senderCustomSplTokenAta: senderCustomTokenATA,
      // hostCustomSplTokenAta: hostCustomSplTokenAta,
      // adminCustomTokenAta: adminCustomSplTokenATA,
      associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
    };
    const transactionInstruction = createMintTicketForFreeInstruction(
      accounts,
      {
        uri: "",
      }
    );

    const transaction = new web3.Transaction().add(transactionInstruction);
    console.log("tx");
    const connection = new Connection(clusterApiUrl("mainnet-beta"));
    const { blockhash } = await connection.getLatestBlockhash();
    transaction.recentBlockhash = blockhash;
    // transaction.
    transaction.feePayer = payer.publicKey as web3.PublicKey;
    console.log("hello");
    const wallet = new NodeWallet(payer);

    transaction.sign(mint);
    // transaction.partialSign()
    const signedTx = await wallet.signTransaction(transaction);
    console.log("signedTx", signedTx);
    try {
      const txid = await connection.sendRawTransaction(signedTx.serialize(), {
        // preflightCommitment: "finalized",
        skipPreflight: true,
      });
      console.log("done", `https://explorer.solana.com/tx/${txid}`);
    } catch (error) {
      console.log(error);
    }
  });
});
