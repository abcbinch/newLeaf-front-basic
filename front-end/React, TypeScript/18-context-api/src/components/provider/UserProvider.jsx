import { UserContext } from "../../context/UserContext";
import { useState } from "react";

//App.js가 아니라
//Provider를 따로 선언해서 상태(state)를 관리한다.
export default function UserProvider({ children }) {
  const [name, setName] = useState("");
  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
}
