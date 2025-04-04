import { createContext } from "react";
const defaultUser = {
  name: "charlotte",
  setName: () => {},
};
export const UserContext = createContext(defaultUser);
