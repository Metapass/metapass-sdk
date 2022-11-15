import { MetapassProgram } from "./../src/types/MetapassProgram";
import {
  AnchorProvider,
  BorshCoder,
  Idl,
  Program,
  web3,
} from "@project-serum/anchor";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  createAssociatedTokenAccountInstruction,
  createMintToInstruction,
  getAssociatedTokenAddress,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import {
  clusterApiUrl,
  Connection,
  Keypair,
  Message,
  PublicKey,
  SystemProgram,
} from "@solana/web3.js";
import {
  createMintTicketForFreeInstruction,
  getAdminPDA,
  getHostPDA,
  idl,
  MintTicketForFreeInstructionAccounts,
  PROGRAM_ADDRESS,
  PROGRAM_ID,
} from "../src";
import { baseDecode, baseEncode } from "borsh";
import fs from "fs";
import NodeWallet from "@project-serum/anchor/dist/cjs/nodewallet";
describe("mint it direct", async () => {
  const TOKEN_METADATA_PROGRAM_ID = new web3.PublicKey(
    "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
  );
  it.skip("should mint direct", async () => {
    // const TOKEN_METADATA_PROGRAM_ID = new web3.PublicKey(
    //   "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
    // );
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
    const attendeeNftTokenAccount: web3.PublicKey =
      await getAssociatedTokenAddress(mint.publicKey, mintAuthority);
    const payerNftTokenAccount: web3.PublicKey =
      await getAssociatedTokenAddress(mint.publicKey, payer.publicKey);
    const hostPDA: web3.PublicKey = await getHostPDA(
      new web3.PublicKey("DZFbytJWS5BMgaaJQ3LFvqMcm6mqaKqorgT7ZbhDHGY8")
    );
    const adminPDA: web3.PublicKey = await getAdminPDA();
    // const accounts: MintTicketForFreeInstructionAccounts = {
    //   mintAuthority: mintAuthority as web3.PublicKey,
    //   eventAccount: new web3.PublicKey(
    //     "FYHVVfz6cRVRUAdbUaVQSmPzhuPWSzYiMdFNFQxsyzN8"
    //   ),
    //   mint: mint.publicKey,
    //   metadata: metadataAddress,
    //   tokenAccount: NftTokenAccount,
    //   tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
    //   payer: payer.publicKey as web3.PublicKey,
    //   masterEdition: masterEdition,
    //   eventHost: hostPDA,
    //   eventHostKey: new web3.PublicKey(
    //     "DZFbytJWS5BMgaaJQ3LFvqMcm6mqaKqorgT7ZbhDHGY8"
    //   ),
    //   adminAccount: adminPDA,
    //   adminKey: new web3.PublicKey(
    //     "4ZVmtujXR4PQVT73r43AD3qKHoUgAvAcw69djR9UP5Pw"
    //   ),
    //   // customSplToken: customSPL,
    //   // customSplTokenProgram: TOKEN_PROGRAM_ID,
    //   // senderCustomSplTokenAta: senderCustomTokenATA,
    //   // hostCustomSplTokenAta: hostCustomSplTokenAta,
    //   // adminCustomTokenAta: adminCustomSplTokenATA,
    //   associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
    // };
    // const transactionInstruction = createMintTicketForFreeInstruction(
    //   accounts,
    //   {
    //     uri: "",
    //   }
    // );

    // const transaction = new web3.Transaction().add(transactionInstruction);
    console.log("tx");
    const connection = new Connection(clusterApiUrl("mainnet-beta"));
    // const { blockhash } = await connection.getLatestBlockhash();
    // transaction.recentBlockhash = blockhash;
    // transaction.
    // transaction.feePayer = payer.publicKey as web3.PublicKey;
    console.log("hello");
    const wallet = new NodeWallet(payer);

    console.log(
      `authority -> ${mintAuthority.toString()} \n wallet -> ${wallet.publicKey.toString()} \n adminpda -> ${adminPDA.toString()} \n payernftata -> ${payerNftTokenAccount.toString()} \n mint -> ${mint.publicKey.toString()} metadata -> ${metadataAddress.toString()} master -> ${masterEdition.toString()} \n hostpda -> ${hostPDA.toString()}`
    );

    const test = await getAssociatedTokenAddress(
      mint.publicKey,
      new PublicKey("9xhtbivFd5sHKcEdZmMwJbJhLRm3M9fREoWvymaLvN7Q")
    );
    console.log("thing ", test.toString());
    // transaction.sign(mint);
    // transaction.partialSign()
    // const signedTx = await wallet.signTransaction(transaction);
    // console.log("signedTx", signedTx);
    try {
      //   const txid = await connection.sendRawTransaction(signedTx.serialize(), {
      //     // preflightCommitment: "finalized",
      //     skipPreflight: true,
      //   });
      const provider = new AnchorProvider(connection, wallet, {
        preflightCommitment: "finalized",
      });
      const program = new Program(idl as Idl, PROGRAM_ID, provider) as Program;
      //   console.log(
      //     await (
      //       await program.account.eventAccount.fetch(
      //         "FYHVVfz6cRVRUAdbUaVQSmPzhuPWSzYiMdFNFQxsyzN8"
      //       )
      //     ).occupiedSeats.toNumber()
      //   );
      //   return;

      //   console.log(program.methods.mintTicketForFree().accounts());
      const txid = await program.methods
        .mintTicketForFree(
          "https://arweave.net/EOis0vqxcg_BcLUSkbxGG-c_mMx3zbq-lyg17IHFSVU"
        )
        .accounts({
          mintAuthority: mintAuthority as web3.PublicKey,
          eventAccount: new web3.PublicKey(
            "FYHVVfz6cRVRUAdbUaVQSmPzhuPWSzYiMdFNFQxsyzN8"
          ),
          mint: mint.publicKey,
          metadata: metadataAddress,
          payerTokenAccount: payerNftTokenAccount,
          attendeeTokenAccount: attendeeNftTokenAccount,
          tokenProgram: TOKEN_PROGRAM_ID,
          rent: web3.SYSVAR_RENT_PUBKEY,
          tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
          payer: wallet.publicKey as web3.PublicKey,
          masterEdition: masterEdition,
          eventHost: hostPDA,
          eventHostKey: new web3.PublicKey(
            "DZFbytJWS5BMgaaJQ3LFvqMcm6mqaKqorgT7ZbhDHGY8"
          ),
          adminAccount: adminPDA,
          adminKey: new web3.PublicKey(
            "4ZVmtujXR4PQVT73r43AD3qKHoUgAvAcw69djR9UP5Pw"
          ),
          systemProgram: SystemProgram.programId,
          associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
        })
        .signers([mint, wallet.payer])
        .rpc({
          preflightCommitment: "recent",
        });
      console.log("txid", txid);
    } catch (error) {
      console.log(error);
    }
  });
  it("ser", async () => {
    console.log("tx");
    const connection = new Connection(clusterApiUrl("mainnet-beta"));
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
    const payer = Keypair.generate();
    const mint = web3.Keypair.generate();
    console.log("z");
    const metadataAddress = await getMetadata(mint.publicKey);
    const masterEdition = await getMasterEdition(mint.publicKey);
    const attendeeNftTokenAccount: web3.PublicKey =
      await getAssociatedTokenAddress(mint.publicKey, mintAuthority);
    const payerNftTokenAccount: web3.PublicKey =
      await getAssociatedTokenAddress(mint.publicKey, payer.publicKey);
    const hostPDA: web3.PublicKey = await getHostPDA(
      new web3.PublicKey("DZFbytJWS5BMgaaJQ3LFvqMcm6mqaKqorgT7ZbhDHGY8")
    );
    const adminPDA: web3.PublicKey = await getAdminPDA();
    console.log("hello");

    const wallet = new NodeWallet(payer);
    const provider = new AnchorProvider(connection, wallet, {
      preflightCommitment: "finalized",
    });
    console.log("y");
    const program = new Program(idl as Idl, PROGRAM_ID, provider) as Program;
    console.log("h");
    const ix = await program.methods
      .mintTicketForFree("https://github.com")
      .accounts({
        mintAuthority: mintAuthority as web3.PublicKey,
        eventAccount: new web3.PublicKey(
          "FYHVVfz6cRVRUAdbUaVQSmPzhuPWSzYiMdFNFQxsyzN8"
        ),
        mint: mint.publicKey,
        metadata: metadataAddress,
        payerTokenAccount: payerNftTokenAccount,
        attendeeTokenAccount: attendeeNftTokenAccount,
        tokenProgram: TOKEN_PROGRAM_ID,
        rent: web3.SYSVAR_RENT_PUBKEY,
        tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
        payer: wallet.publicKey as web3.PublicKey,
        masterEdition: masterEdition,
        eventHost: hostPDA,
        eventHostKey: new web3.PublicKey(
          "DZFbytJWS5BMgaaJQ3LFvqMcm6mqaKqorgT7ZbhDHGY8"
        ),
        adminAccount: adminPDA,
        adminKey: new web3.PublicKey(
          "4ZVmtujXR4PQVT73r43AD3qKHoUgAvAcw69djR9UP5Pw"
        ),
        systemProgram: SystemProgram.programId,
        associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
      })
      .signers([mint, wallet.payer])
      .instruction();
    // .instruction();
    // ix.data;
    // console.log(await ix.instruction());
    const mintix = createMintToInstruction(
      mint.publicKey,
      payer.publicKey,
      payer.publicKey,
      10
    );

    const ixbuffer = new BorshCoder(idl as Idl);
    console.log(ix.keys);

    // const final = ixbuffer.instruction.encode("mintTicketForFree", ix);
    const be = baseEncode(mintix.data);
    const be2 = baseEncode(Buffer.from(mintix.keys));
    console.log(be, be2);
    // console.log(ixbuffer.instruction);
  });
});
