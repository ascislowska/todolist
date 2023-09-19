import { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";

function ThemeBtn() {
  const { theme, setTheme } = useContext(ThemeContext);
  const themeChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className="toggle-container">
      <input type="checkbox" id="toggleTheme" onChange={themeChange}></input>
      <label htmlFor="toggleTheme">
        <BsSun className="toggle-icon sun" />
        <BsMoonStarsFill className="toggle-icon moon" />
      </label>
    </div>
  );
}

export default ThemeBtn;
