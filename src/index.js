const { ApolloServer } = require("apollo-server");

const typeDefs = require("./definitions");
const { books } = require("./data");

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
