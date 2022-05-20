import { User } from "../../types/types";
import { users } from "../../dbconnections";

const usersMock = [
  {
    id: "1",
    username: "macs03",
    email: "macs03@gmail.com",
    role: "ADMIN"
  },
  {
    id: "2",
    username: "aurimar",
    email: "aurimar@gmail.com",
    role: "USER"
  },
  {
    id: "3",
    username: "jondoe",
    email: "jondoe@gmail.com",
    role: "GUESS"
  }
];

const getUser = async (
  _: any,
  args: any,
  _context: any,
  _info: any
): Promise<User> => {
  const { id } = args;

  const user: Array<User> = usersMock.filter(
    user => user.id === id
  ) as Array<User>;

  return user[0];
};

const getUsers = async (
  _: any,
  _args: any,
  _context: any,
  _info: any
): Promise<Array<User>> => {
  const usersResponse: Array<User> = usersMock as Array<User>;

  users.find().toArray((err: any, items: any[]) => {
    if (err) {
      console.error(err);
    }
    console.log(items);
  });

  return usersResponse;
};

const getMe = async (
  _: any,
  _args: any,
  _context: any,
  _info: any
): Promise<User> => {
  return usersMock[0] as User;
};

export { getUser, getUsers, getMe };
