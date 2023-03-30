import { ThemeContext } from "@/context/theme-context";
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
      className="btn btn-main-2 btn-icon btn-round-full"
    >
      Change to dark theme
    </button>
  );
};

export default ToggleThemeButton;
