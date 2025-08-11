/**
 * Generates a GraphQL resolver skeleton in server/schema/newResolvers.ts
 * node scripts/gen-resolver.js ResolverName
 */
const fs = require('fs')
const name = process.argv[2] || 'New'
const path = `server/schema/resolvers_${name}.ts`
const content = `export const ${name} = { Query: {}, Mutation: {} }\n`
fs.writeFileSync(path, content)
console.log('Generated', path)
