import { ApolloServer } from 'apollo-server-micro'
import { typeDefs } from '../../server/schema/typeDefs'
import { resolvers } from '../../server/schema/resolvers'
import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'micro-cors'
import connect from '../../server/mongo'

connect()

const cors = Cors()
const server = new ApolloServer({ typeDefs, resolvers })

const startServer = server.start()

export default cors(async function handler(req: NextApiRequest, res: NextApiResponse){
  await startServer
  await server.createHandler({ path: '/api/graphql' })(req as any, res as any)
})

export const config = {
  api: { bodyParser: false }
}
