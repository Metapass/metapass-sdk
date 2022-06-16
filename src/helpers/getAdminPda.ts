import { PublicKey } from "@solana/web3.js";
import * as anchor from "@project-serum/anchor";

export const getAdminPDA = async (): Promise<PublicKey> => {
  const [adminPda, _] = await PublicKey.findProgramAddress(
    [anchor.utils.bytes.utf8.encode("admin")],
    new PublicKey("Crvo7H5Qupi7pD63wyyXfoPbzAkU9Hbqwno7xTrXLbKo")
  );
  return adminPda;
};
