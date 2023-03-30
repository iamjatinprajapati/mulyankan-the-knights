import { Theme, ThemeContext } from "@/context/theme-context";
import { useContext } from "react";

const ToggleThemeButton = () => {
  const themeContext = useContext(ThemeContext);
  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (themeContext) {
      themeContext.toggleTheme(themeContext.theme);
    }
  };
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`btn btn-icon btn-round-full ${themeContext.theme === Theme.LIGHT ? 'btn-main' : 'btn-main-2'}`}
    >
      {`${themeContext.theme === Theme.LIGHT ? 'Toggle to dark' : 'Toggle to light'}`}
    </button>
  );
};

export default ToggleThemeButton;
