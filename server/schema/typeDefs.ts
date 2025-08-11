import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type User { id: ID! email: String! name: String }
  type VoteTally { yes: Int! no: Int! }
  type Query { health: String! voteTally(galleryId: ID!): VoteTally! me: User }
  type Mutation { vote(galleryId: ID!, choice: String!): VoteTally! register(email:String!, password:String!, name:String): String login(email:String!, password:String!): String }
`
