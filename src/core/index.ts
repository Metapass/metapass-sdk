import { getEventPda } from "../constants";
import { program } from "../constants";
import { conditions } from "../conditions";
import { SystemProgram } from "@solana/web3.js";
import * as anchor from "@project-serum/anchor";

class Metapass {
	address: string;

	constructor(address: string) {
		this.address = address;
	}

	async createEvent(title: string, uri: string) {
		const [eventPDA, _] = await getEventPda();
		const tx = await program.rpc.initialize(title, uri, {
			//removed condtions from here, thats just for running tests
			accounts: {
				eventAccount: eventPDA,
				authority: anchor.getProvider().wallet.publicKey,
				systemProgram: SystemProgram.programId,
			},
		});
		return tx;
	}
}

export default Metapass;
