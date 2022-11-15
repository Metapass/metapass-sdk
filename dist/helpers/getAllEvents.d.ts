import { Connection } from "@solana/web3.js";
import { EventAccount } from "../accounts";
export declare const getAllEvents: (connection: Connection) => Promise<Array<EventAccount>>;
