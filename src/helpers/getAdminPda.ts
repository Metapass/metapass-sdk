import { PublicKey } from "@solana/web3.js";
import * as anchor from "@project-serum/anchor";
import { PROGRAM_ID } from "..";
const getAdminPDA = async (): Promise<PublicKey> => {
  const [adminPda, _] = await PublicKey.findProgramAddress(
    [anchor.utils.bytes.utf8.encode("admin")],
    PROGRAM_ID
  );
  return adminPda;
};

export default getAdminPDA;
