import { ReactElement } from "react";
import Scripts from "@/components/global/scripts";
import { ThemeProvider } from "@/context/theme-context";
const DefaultLayout = ({ children }: { children: ReactElement }) => {
  return (
    <ThemeProvider>
      <>
        <Scripts />
        {children}
      </>
    </ThemeProvider>
  );
};

export default DefaultLayout;
