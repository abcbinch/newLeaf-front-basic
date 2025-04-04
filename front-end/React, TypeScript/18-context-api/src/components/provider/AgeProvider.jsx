import { AgeContext } from "../../context/AgeContext";
import { useState } from "react";

export default function AgeProvider({ children }) {
  const [age, setAge] = useState(0);
  return (
    <AgeContext.Provider value={{ age, setAge }}>
      {children}
    </AgeContext.Provider>
  );
}
