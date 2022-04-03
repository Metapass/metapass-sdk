import { Storagemp } from "./types";
import { Program } from "@project-serum/anchor";
import * as anchor from "@project-serum/anchor";
import { PublicKey, SystemProgram } from "@solana/web3.js";
export const TOKEN_METADATA_PROGRAM_ID = new anchor.web3.PublicKey(
    "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
);
export const provider = anchor.setProvider(anchor.Provider.env());
export const program = anchor.workspace.Storagemp as Program<Storagemp>;
export const getEventPda = async () => {
    return await PublicKey.findProgramAddress(
        [
            anchor.utils.bytes.utf8.encode("event_account"),
            anchor.getProvider().wallet.publicKey.toBuffer(),
        ],
        program.programId
    );
};