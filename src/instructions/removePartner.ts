/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beetSolana from '@metaplex-foundation/beet-solana'
import * as beet from '@metaplex-foundation/beet'

/**
 * @category Instructions
 * @category RemovePartner
 * @category generated
 */
export type RemovePartnerInstructionArgs = {
  address: web3.PublicKey
}
/**
 * @category Instructions
 * @category RemovePartner
 * @category generated
 */
const removePartnerStruct = new beet.BeetArgsStruct<
  RemovePartnerInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['address', beetSolana.publicKey],
  ],
  'RemovePartnerInstructionArgs'
)
/**
 * Accounts required by the _removePartner_ instruction
 * @category Instructions
 * @category RemovePartner
 * @category generated
 */
export type RemovePartnerInstructionAccounts = {
  adminAccount: web3.PublicKey
  adminAuthority: web3.PublicKey
}

const removePartnerInstructionDiscriminator = [
  205, 64, 184, 235, 182, 107, 63, 15,
]

/**
 * Creates a _RemovePartner_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category RemovePartner
 * @category generated
 */
export function createRemovePartnerInstruction(
  accounts: RemovePartnerInstructionAccounts,
  args: RemovePartnerInstructionArgs
) {
  const { adminAccount, adminAuthority } = accounts

  const [data] = removePartnerStruct.serialize({
    instructionDiscriminator: removePartnerInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: adminAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: adminAuthority,
      isWritable: true,
      isSigner: true,
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
