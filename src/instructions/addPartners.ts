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
 * @category AddPartners
 * @category generated
 */
export type AddPartnersInstructionArgs = {
  partner: web3.PublicKey
}
/**
 * @category Instructions
 * @category AddPartners
 * @category generated
 */
export const addPartnersStruct = new beet.BeetArgsStruct<
  AddPartnersInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['partner', beetSolana.publicKey],
  ],
  'AddPartnersInstructionArgs'
)
/**
 * Accounts required by the _addPartners_ instruction
 *
 * @property [_writable_] adminAccount
 * @property [_writable_, **signer**] adminAuthority
 * @category Instructions
 * @category AddPartners
 * @category generated
 */
export type AddPartnersInstructionAccounts = {
  adminAccount: web3.PublicKey
  adminAuthority: web3.PublicKey
}

export const addPartnersInstructionDiscriminator = [
  130, 213, 217, 119, 251, 82, 6, 73,
]

/**
 * Creates a _AddPartners_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category AddPartners
 * @category generated
 */
export function createAddPartnersInstruction(
  accounts: AddPartnersInstructionAccounts,
  args: AddPartnersInstructionArgs,
  programId = new web3.PublicKey('2PsDAHY1FEnSrcRkJcL4X8e6ah7meBMLxYvcpdkcEJdK')
) {
  const [data] = addPartnersStruct.serialize({
    instructionDiscriminator: addPartnersInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.adminAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.adminAuthority,
      isWritable: true,
      isSigner: true,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
