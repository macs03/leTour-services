import ping from "./ping";
import { getUser, getUsers, getMe } from "./user";

const resolvers = {
  Query: {
    ping,
    user: getUser,
    allUsers: getUsers,
    me: getMe
  }
};

export default resolvers;
