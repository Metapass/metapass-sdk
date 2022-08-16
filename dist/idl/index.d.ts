export declare const idl: {
    version: string;
    name: string;
    instructions: ({
        name: string;
        accounts: {
            name: string;
            isMut: boolean;
            isSigner: boolean;
        }[];
        args: {
            name: string;
            type: string;
        }[];
    } | {
        name: string;
        accounts: {
            name: string;
            isMut: boolean;
            isSigner: boolean;
        }[];
        args: {
            name: string;
            type: {
                defined: string;
            };
        }[];
    } | {
        name: string;
        accounts: {
            name: string;
            isMut: boolean;
            isSigner: boolean;
        }[];
        args: {
            name: string;
            type: {
                vec: string;
            };
        }[];
    })[];
    accounts: {
        name: string;
        type: {
            kind: string;
            fields: ({
                name: string;
                type: string;
            } | {
                name: string;
                type: {
                    vec: string;
                    defined?: undefined;
                };
            } | {
                name: string;
                type: {
                    defined: string;
                    vec?: undefined;
                };
            })[];
        };
    }[];
    types: {
        name: string;
        type: {
            kind: string;
            fields: ({
                name: string;
                type: {
                    vec: string;
                };
            } | {
                name: string;
                type: string;
            })[];
        };
    }[];
    errors: {
        code: number;
        name: string;
        msg: string;
    }[];
    metadata: {
        address: string;
    };
};
