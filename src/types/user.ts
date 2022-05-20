import { gql } from "apollo-server-express";

const User = gql`
  type Query {
    me: User!
    user(id: ID!): User
    allUsers: [User]
  }

  enum Role {
    USER
    ADMIN
    GUESS
  }

  interface Node {
    id: ID!
  }

  type User implements Node {
    id: ID!
    username: String!
    email: String!
    role: Role!
  }
`;

export default User;
