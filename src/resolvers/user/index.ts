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

const getUser = (_: any, args: any, _context: any, _info: any) => {
  const { id } = args;

  const user: Array<User> = users.filter(user => user.id === id) as Array<User>;

  return user[0];
};

const getUsers = (_: any, _args: any, _context: any, _info: any) => {
  return users;
};

const getMe = (_: any, _args: any, _context: any, _info: any) => {
  return users[0];
};

export { getUser, getUsers, getMe };
