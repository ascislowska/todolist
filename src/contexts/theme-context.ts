import { createContext } from "react";
import { Themes } from "../Interfaces";
export const ThemeContext = createContext<{
  theme: Themes;
  setTheme: (theme: Themes) => void;
}>({ theme: "light", setTheme: () => {} });
