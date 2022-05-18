import { Connection, PublicKey } from "@solana/web3.js";

import { EventAccount } from "../accounts";

export const getAllEvents = async (
  connection: Connection
): Promise<Array<EventAccount>> => {
  let events: EventAccount[] = [];
  try {
    const accounts = await connection.getProgramAccounts(
      new PublicKey("Crvo7H5Qupi7pD63wyyXfoPbzAkU9Hbqwno7xTrXLbKo")
    );
    accounts.map((account) => {
      try {
        events.push(EventAccount.fromAccountInfo(account.account)[0]);
      } catch (error) {}
    });
  } catch (e: unknown) {
    const result = e as Error;

    console.log("Error in file getEvent.ts: ", result.message);
    console.log(
      "Ping us in our discord server, devs wil definitely do something :)"
    );
  }
  return events;
};
