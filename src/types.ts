export type Storagemp = {
    version: "0.1.0";
    name: "storagemp";
    instructions: [
        {
            name: "initialize";
            accounts: [
                {
                    name: "eventAccount";
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: "authority";
                    isMut: true;
                    isSigner: true;
                },
                {
                    name: "systemProgram";
                    isMut: false;
                    isSigner: false;
                }
            ];
            args: [
                {
                    name: "title";
                    type: "string";
                },
                {
                    name: "uri";
                    type: "string";
                }
            ];
        },
        {
            name: "editEvent";
            accounts: [
                {
                    name: "authority";
                    isMut: false;
                    isSigner: true;
                },
                {
                    name: "eventAccount";
                    isMut: true;
                    isSigner: false;
                }
            ];
            args: [
                {
                    name: "title";
                    type: "string";
                }
            ];
        },
        {
            name: "mintTicket";
            accounts: [
                {
                    name: "mintAuthority";
                    isMut: false;
                    isSigner: true;
                },
                {
                    name: "eventAccount";
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: "mint";
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: "tokenProgram";
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: "metadata";
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: "tokenMetadataProgram";
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: "payer";
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: "systemProgram";
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: "rent";
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: "masterEdition";
                    isMut: false;
                    isSigner: false;
                }
            ];
            args: [];
        }
    ];
    accounts: [
        {
            name: "eventAccount";
            type: {
                kind: "struct";
                fields: [
                    {
                        name: "eventNonce";
                        type: "u64";
                    },
                    {
                        name: "bump";
                        type: "u8";
                    },
                    {
                        name: "title";
                        type: "string";
                    },
                    {
                        name: "authority";
                        type: "publicKey";
                    },
                    {
                        name: "uri";
                        type: "string";
                    }
                ];
            };
        }
    ];
};

export const IDL: Storagemp = {
    version: "0.1.0",
    name: "storagemp",
    instructions: [
        {
            name: "initialize",
            accounts: [
                {
                    name: "eventAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "authority",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "title",
                    type: "string",
                },
                {
                    name: "uri",
                    type: "string",
                },
            ],
        },
        {
            name: "editEvent",
            accounts: [
                {
                    name: "authority",
                    isMut: false,
                    isSigner: true,
                },
                {
                    name: "eventAccount",
                    isMut: true,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "title",
                    type: "string",
                },
            ],
        },
        {
            name: "mintTicket",
            accounts: [
                {
                    name: "mintAuthority",
                    isMut: false,
                    isSigner: true,
                },
                {
                    name: "eventAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "mint",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "tokenProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "metadata",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "tokenMetadataProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "payer",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "rent",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "masterEdition",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [],
        },
    ],
    accounts: [
        {
            name: "eventAccount",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "eventNonce",
                        type: "u64",
                    },
                    {
                        name: "bump",
                        type: "u8",
                    },
                    {
                        name: "title",
                        type: "string",
                    },
                    {
                        name: "authority",
                        type: "publicKey",
                    },
                    {
                        name: "uri",
                        type: "string",
                    },
                ],
            },
        },
    ],
};
