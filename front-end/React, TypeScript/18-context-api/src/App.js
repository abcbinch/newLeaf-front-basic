import { useState } from "react";
import Box from "./components/Box";
import Profile from "./components/Profile";
import { ThemeContext } from "./context/ThemeContext";
import UserProvider from "./components/provider/UserProvider";
import AgeProvider from "./components/provider/AgeProvider";

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <ThemeContext.Provider value={"dark"}>
        <Box />
      </ThemeContext.Provider>

      <UserProvider>
        <AgeProvider>
          <Profile />
        </AgeProvider>
      </UserProvider>
    </div>
  );
}

export default App;
