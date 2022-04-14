/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import {
  CreateEventInput,
  createEventInputBeet,
} from '../types/CreateEventInput'

/**
 * @category Instructions
 * @category InitializeEvent
 * @category generated
 */
export type InitializeEventInstructionArgs = {
  createEventInfo: CreateEventInput
}
/**
 * @category Instructions
 * @category InitializeEvent
 * @category generated
 */
const initializeEventStruct = new beet.FixableBeetArgsStruct<
  InitializeEventInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['createEventInfo', createEventInputBeet],
  ],
  'InitializeEventInstructionArgs'
)
/**
 * Accounts required by the _initializeEvent_ instruction
 * @category Instructions
 * @category InitializeEvent
 * @category generated
 */
export type InitializeEventInstructionAccounts = {
  eventAccount: web3.PublicKey
  authority: web3.PublicKey
  eventHostAccount: web3.PublicKey
}

const initializeEventInstructionDiscriminator = [
  126, 249, 86, 221, 202, 171, 134, 20,
]

/**
 * Creates a _InitializeEvent_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category InitializeEvent
 * @category generated
 */
export function createInitializeEventInstruction(
  accounts: InitializeEventInstructionAccounts,
  args: InitializeEventInstructionArgs
) {
  const { eventAccount, authority, eventHostAccount } = accounts

  const [data] = initializeEventStruct.serialize({
    instructionDiscriminator: initializeEventInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: eventAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: authority,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: eventHostAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey(
      'Crvo7H5Qupi7pD63wyyXfoPbzAkU9Hbqwno7xTrXLbKo'
    ),
    keys,
    data,
  })
  return ix
}