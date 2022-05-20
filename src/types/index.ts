import { gql } from "apollo-server-express";
import Ping from "./ping";
import User from "./user";

const types = gql`
  ${Ping}
  ${User}
`;

export default types;
