export * from './AdminAccount'
export * from './EventAccount'
export * from './EventHostAccount'

import { EventAccount } from './EventAccount'
import { EventHostAccount } from './EventHostAccount'
import { AdminAccount } from './AdminAccount'

export const accountProviders = { EventAccount, EventHostAccount, AdminAccount }
