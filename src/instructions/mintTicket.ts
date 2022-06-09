/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category MintTicket
 * @category generated
 */
export type MintTicketInstructionArgs = {
  uri: string
}
/**
 * @category Instructions
 * @category MintTicket
 * @category generated
 */
export const mintTicketStruct = new beet.FixableBeetArgsStruct<
  MintTicketInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['uri', beet.utf8String],
  ],
  'MintTicketInstructionArgs'
)
/**
 * Accounts required by the _mintTicket_ instruction
 *
 * @property [_writable_, **signer**] mintAuthority
 * @property [_writable_] eventAccount
 * @property [_writable_, **signer**] mint
 * @property [_writable_] metadata
 * @property [_writable_] tokenAccount
 * @property [] tokenMetadataProgram
 * @property [_writable_] payer
 * @property [_writable_] masterEdition
 * @property [_writable_] eventHost
 * @property [_writable_] eventHostKey
 * @property [_writable_] adminAccount
 * @property [_writable_] adminKey
 * @property [_writable_] customSplToken
 * @property [] customSplTokenProgram
 * @property [_writable_] senderCustomSplTokenAta
 * @property [_writable_] hostCustomSplTokenAta
 * @property [_writable_] adminCustomTokenAta
 * @property [] associatedTokenProgram
 * @category Instructions
 * @category MintTicket
 * @category generated
 */
export type MintTicketInstructionAccounts = {
  mintAuthority: web3.PublicKey
  eventAccount: web3.PublicKey
  mint: web3.PublicKey
  metadata: web3.PublicKey
  tokenAccount: web3.PublicKey
  tokenMetadataProgram: web3.PublicKey
  payer: web3.PublicKey
  masterEdition: web3.PublicKey
  eventHost: web3.PublicKey
  eventHostKey: web3.PublicKey
  adminAccount: web3.PublicKey
  adminKey: web3.PublicKey
  customSplToken: web3.PublicKey
  customSplTokenProgram: web3.PublicKey
  senderCustomSplTokenAta: web3.PublicKey
  hostCustomSplTokenAta: web3.PublicKey
  adminCustomTokenAta: web3.PublicKey
  associatedTokenProgram: web3.PublicKey
}

export const mintTicketInstructionDiscriminator = [
  159, 167, 223, 60, 138, 6, 23, 29,
]

/**
 * Creates a _MintTicket_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category MintTicket
 * @category generated
 */
export function createMintTicketInstruction(
  accounts: MintTicketInstructionAccounts,
  args: MintTicketInstructionArgs
) {
  const {
    mintAuthority,
    eventAccount,
    mint,
    metadata,
    tokenAccount,
    tokenMetadataProgram,
    payer,
    masterEdition,
    eventHost,
    eventHostKey,
    adminAccount,
    adminKey,
    customSplToken,
    customSplTokenProgram,
    senderCustomSplTokenAta,
    hostCustomSplTokenAta,
    adminCustomTokenAta,
    associatedTokenProgram,
  } = accounts

  const [data] = mintTicketStruct.serialize({
    instructionDiscriminator: mintTicketInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: mintAuthority,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: eventAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: mint,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: tokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: tokenMetadataProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: payer,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: masterEdition,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: eventHost,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: eventHostKey,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: adminAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: adminKey,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: customSplToken,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: customSplTokenProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: senderCustomSplTokenAta,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: hostCustomSplTokenAta,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: adminCustomTokenAta,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: associatedTokenProgram,
      isWritable: false,
      isSigner: false,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey(
      '2PsDAHY1FEnSrcRkJcL4X8e6ah7meBMLxYvcpdkcEJdK'
    ),
    keys,
    data,
  })
  return ix
}
