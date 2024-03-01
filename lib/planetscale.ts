import { Kysely } from 'kysely'
import { PlanetScaleDialect } from 'kysely-planetscale'

interface VisitorsTable {
  count: number
}

interface Database {
  visitors: VisitorsTable
}

export const queryBuilder = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: process.env.DATABASE_URL,
  }),
})
