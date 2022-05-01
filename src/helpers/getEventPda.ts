import { PublicKey } from "@solana/web3.js";
import * as anchor from "@project-serum/anchor";
import { PROGRAM_ID } from "..";
const getEventPDA = async (
  nonce: number,
  hostKey: PublicKey
): Promise<PublicKey> => {
  const [eventPDA, _] = await PublicKey.findProgramAddress(
    [
      anchor.utils.bytes.utf8.encode("event_account"),
      hostKey.toBuffer(),
      new anchor.BN(nonce).toArrayLike(Buffer),
    ],
    PROGRAM_ID
  );
  return eventPDA;
};

export default getEventPDA;
