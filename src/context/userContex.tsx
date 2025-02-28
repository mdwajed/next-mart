"use client";
import { getCurrentUser } from "@/actions/user";
import { IUser } from "@/types";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface UserProviderValues {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}
const UserContex = createContext<UserProviderValues | undefined>(undefined);
const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const currentUser = await getCurrentUser();
      setUser(currentUser as IUser | null);
    } catch (error) {
      console.error("Failed to fetch user:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchUser();
  }, [isLoading]);
  return (
    <UserContex.Provider value={{ user, isLoading, setUser, setIsLoading }}>
      {children}
    </UserContex.Provider>
  );
};
export const useUser = () => {
  const contex = useContext(UserContex);
  if (!contex) {
    throw new Error("useUser must be use within UserProvider hook");
  }
  return contex;
};
export default UserProvider;
