import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Profile() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Change Theme {theme}</p>
      <button onClick={toggleTheme}>Switch Theme</button>
    </div>
  );
}

export default Profile;
