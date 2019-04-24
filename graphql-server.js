const path = require('path')
const { GraphQLServer } = require('graphql-yoga')
const schema = require('./graphql/contentful.graphql')
const { importSchema } = require('graphql-import')
// const { fileLoader, mergeTypes } = require('merge-graphql-schemas')
// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')

// const schema = importSchema('./graphql/contentful.graphql')
// console.log('schemas',schemas)

// const typesArray = fileLoader('./graphql');
// const typeDefs = schemas //mergeTypes(typesArray);

// const typeDefs = gql`${schemas}`
// const resolvers = {}
// const resolvers = {
//   Query: {
//     hello: (_, { name }) => `Hello ${name || 'World'}`,
//   },
// }

const server = new GraphQLServer({ schema })
server.start(() => console.log('Server is running on localhost:4000'))
