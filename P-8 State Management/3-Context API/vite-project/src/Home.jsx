// 3
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Home() {
        // useContext(): Reads the context value from a component.

  const {theme} = useContext(ThemeContext);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Current theme: {theme}</p>
    </div>
  );
}

export default Home;