import 'server-only'

import { cache } from 'react'
import { queryBuilder } from './planetscale'

export const getVisitorCount = cache(async () => {
  const count = await queryBuilder.transaction().execute(async (trx) => {
    const data = await trx
      .selectFrom('visitors')
      .select('count')
      .executeTakeFirst()

    if (!data?.count) return undefined

    await trx
      .updateTable('visitors')
      .set({ count: data.count + 1 })
      .executeTakeFirst()

    return data?.count + 1
  })

  return count
})
