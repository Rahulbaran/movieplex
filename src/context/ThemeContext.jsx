import { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext(undefined);

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: light)");
    if (systemTheme.matches) setTheme("light");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
