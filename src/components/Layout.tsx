import React, { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";

interface Props {
  setWaxprice: (waxprice: number) => void;
  waxprice: number;
}

export function Layout(props: Props) {
  return (
    <div>
      <FooterSpacer>
        <Header
          waxprice={props.waxprice}
          setWaxprice={props.setWaxprice}
        ></Header>
        <Outlet />
      </FooterSpacer>
      <Footer></Footer>
    </div>
  );
}

const FooterSpacer = styled.div`
  min-height: 100vh;
`;
