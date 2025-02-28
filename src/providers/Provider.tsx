import UserProvider from "@/context/userContex";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default Provider;
