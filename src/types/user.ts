export interface IUser {
  userId: string;
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
  isBlocked: boolean;
}
