import { Connection } from "@solana/web3.js";
import { PROGRAM_ID } from "..";
import { EventAccount } from "../accounts";

const getAllEvents = async (
  connection: Connection
): Promise<Array<EventAccount>> => {
  let events: EventAccount[] = [];
  try {
    const accounts = await connection.getProgramAccounts(PROGRAM_ID);
    accounts.forEach((account) => {
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

export default getAllEvents;
