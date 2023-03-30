import { ReactElement } from "react";
import Scripts from "@/components/global/scripts";
const DefaultLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Scripts />
      {children}
    </>
  );
};

export default DefaultLayout;
