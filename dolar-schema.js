const { gql } = require('apollo-server');

const typeDefs = `
  type dolar {
	dolarCompra: String
	dolarVenta: String
	euroCompra: String
	euroVenta: String
	realCompra: String
	realVenta: String
	date: Date
  }   	

  type Post {
    id: Int!
    title: String
    author: Author
    votes: Int
  }

  # the schema allows the following query:
  type Query {
    posts: [Post]
    author(id: Int!): Author
  }
`;

const resolvers = {
	Query: {
	  dolar: () => dolar,
	},
  };

module.exports = typeDefs;