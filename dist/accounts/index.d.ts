export * from './AdminAccount';
export * from './EventAccount';
export * from './EventHostAccount';
import { EventAccount } from './EventAccount';
import { EventHostAccount } from './EventHostAccount';
import { AdminAccount } from './AdminAccount';
export declare const accountProviders: {
    EventAccount: typeof EventAccount;
    EventHostAccount: typeof EventHostAccount;
    AdminAccount: typeof AdminAccount;
};
