import { Connection } from "@solana/web3.js";
import { EventAccount } from "../accounts";
declare const getAllEvents: (connection: Connection) => Promise<Array<EventAccount>>;
export default getAllEvents;
