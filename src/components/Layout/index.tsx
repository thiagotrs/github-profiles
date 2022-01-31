import { ReactNode } from "react";
import Header from "../Header";
import { WrapperLayout } from "./styled";

const Layout: React.FC<{ children : ReactNode }> = ({ children }) =>  (
  <WrapperLayout>
    <Header />
    { children }
  </WrapperLayout>
)
  
export default Layout;