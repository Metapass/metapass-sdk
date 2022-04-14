/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'
export type EventHost = {
  eventsCreated: web3.PublicKey[]
  displayName: string
  pubKey: web3.PublicKey
  profileImage: string
  eventCount: beet.bignum
  bump: number
}

/**
 * @category userTypes
 * @category generated
 */
export const eventHostBeet = new beet.FixableBeetArgsStruct<EventHost>(
  [
    ['eventsCreated', beet.array(beetSolana.publicKey)],
    ['displayName', beet.utf8String],
    ['pubKey', beetSolana.publicKey],
    ['profileImage', beet.utf8String],
    ['eventCount', beet.u64],
    ['bump', beet.u8],
  ],
  'EventHost'
)
