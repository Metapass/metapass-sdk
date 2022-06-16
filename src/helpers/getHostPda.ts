import { PublicKey } from "@solana/web3.js";
import * as anchor from "@project-serum/anchor";
// import { PROGRAM_ID } from "..";
export const getHostPDA = async (hostKey: PublicKey): Promise<PublicKey> => {
  const [hostPda, _] = await PublicKey.findProgramAddress(
    [anchor.utils.bytes.utf8.encode("event-host-key"), hostKey.toBuffer()],
    new PublicKey("Crvo7H5Qupi7pD63wyyXfoPbzAkU9Hbqwno7xTrXLbKo")
  );
  return hostPda;
};
