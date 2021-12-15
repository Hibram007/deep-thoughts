// import the gql tagged template function
// esentially a link to a kind of template literal for this query lang - linked to a lib with doc
const { gql } = require('apollo-server-express');

// create our typeDefs - stating exactly what data you want

const typeDefs = gql`
  type Query {
    helloWorld: String
  }
`;

// export the typeDefs
module.exports = typeDefs;

