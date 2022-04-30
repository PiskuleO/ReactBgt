import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";

export function Layout() {
  return (
    <div>
      <FooterSpacer>
        <Header></Header>
        <Outlet />
      </FooterSpacer>
      <Footer></Footer>
    </div>
  );
}

const FooterSpacer = styled.div`
  min-height: 100vh;
`;
