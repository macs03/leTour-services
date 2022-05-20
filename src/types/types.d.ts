export type Role = "USER" | "ADMIN" | "GUESS";

export interface User {
  id: string;
  username: string;
  email: string;
  role: Role;
}
