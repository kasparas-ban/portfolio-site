import 'server-only'

import { cache } from 'react'
import { queryBuilder } from './planetscale'

export const getVisitorCount = cache(async () => {
    
    const data = await queryBuilder
        .selectFrom('visitors')
        .select('count')
        .executeTakeFirst()
    
    return data?.count
})