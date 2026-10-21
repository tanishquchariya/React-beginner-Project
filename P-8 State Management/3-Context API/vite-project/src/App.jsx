// 2
import ThemeContext from "./ThemeContext";
import Home from "./Home";
import Profile from "./Profile";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  // Function to switch between themes
  function toggleTheme() {
    setTheme((previousTheme) => (previousTheme === "light" ? "dark" : "light"));
  }
  return (
    // Provider :- Makes a context value available to descendant components.
    // <ThemeContext.Provider value="dark">
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Home />
      <Profile />
    </ThemeContext.Provider>
  );
}

export default App;
