import { User } from "../../types/types";

const users = [
  {
    id: "1",
    username: "macs03",
    email: "macs03@gmail.com",
    role: "admin"
  },
  {
    id: "2",
    username: "aurimar",
    email: "aurimar@gmail.com",
    role: "user"
  },
  {
    id: "3",
    username: "jondoe",
    email: "jondoe@gmail.com",
    role: "user"
  }
];

const getUser = async (
  _: any,
  args: any,
  _context: any,
  _info: any
): Promise<User> => {
  const { id } = args;

  const user: Array<User> = users.filter(user => user.id === id) as Array<User>;

  return user[0];
};

const getUsers = async (
  _: any,
  _args: any,
  _context: any,
  _info: any
): Promise<Array<User>> => {
  const usersResponse: Array<User> = users as Array<User>;

  return usersResponse;
};

const getMe = async (
  _: any,
  _args: any,
  _context: any,
  _info: any
): Promise<User> => {
  return users[0] as User;
};

export { getUser, getUsers, getMe };
