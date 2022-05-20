import { gql } from "apollo-server-express";

const Ping = gql`
  type Query {
    ping: String
  }
`;

export default Ping;
