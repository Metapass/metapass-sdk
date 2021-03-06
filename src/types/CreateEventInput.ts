/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import * as beetSolana from '@metaplex-foundation/beet-solana'
export type CreateEventInput = {
  title: string
  description: string
  uri: string
  link: string
  fee: beet.bignum
  seats: beet.bignum
  date: string
  venue: string
  isCutPayedByCreator: boolean
  isCustomSplToken: boolean
  customSplToken: web3.PublicKey
}

/**
 * @category userTypes
 * @category generated
 */
export const createEventInputBeet =
  new beet.FixableBeetArgsStruct<CreateEventInput>(
    [
      ['title', beet.utf8String],
      ['description', beet.utf8String],
      ['uri', beet.utf8String],
      ['link', beet.utf8String],
      ['fee', beet.u64],
      ['seats', beet.u64],
      ['date', beet.utf8String],
      ['venue', beet.utf8String],
      ['isCutPayedByCreator', beet.bool],
      ['isCustomSplToken', beet.bool],
      ['customSplToken', beetSolana.publicKey],
    ],
    'CreateEventInput'
  )
