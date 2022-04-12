import React, { useEffect, useState } from "react";
import logo from "../Logo.png";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

interface Props {
  setWaxprice: (waxprice: number) => void;
  waxprice: number;
}

export function Header(props: Props) {
  useEffect(() => {
    (async () => {
      const waxusd = await (
        await fetch(
          "https://api.binance.com/api/v3/ticker/price?symbol=WAXPUSDT"
        )
      ).json();
      props.setWaxprice(parseFloat(waxusd.price));
    })();
  }, []);
  return (
    <header>
      <Navbar>
        <LogoNavLink to="/">
          <NavImg src={logo} alt="logo" />
        </LogoNavLink>
        <NavItem>
          <WaxImg src="/static/waxlogo.png" alt="waxlogo" />
          <PriceParagraph>
            ${Math.round(100 * props.waxprice) / 100}
          </PriceParagraph>
        </NavItem>
        <NavLink to="/games">
          <NavParagraph>GAMES</NavParagraph>
        </NavLink>
      </Navbar>
    </header>
  );
}

const Navbar = styled.nav`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #f2f2f2;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  font-weight: 100;
  text-decoration: none;
  font-size: 1rem;
  padding: calc(0.5rem + 1vw);
  display: flex;
  flex-direction: row;
  align-content: center;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: calc(15rem + 5vw);
`;

const LogoNavLink = styled(NavLink)`
  padding: 0;
`;

const NavParagraph = styled.p`
  transition: 0.3s;
  text-shadow: 2px 8px 8px black;
  font-size: calc(1rem + 1vw);
  margin: 0px;
  :hover {
    text-shadow: 4px 16px 16px black;
  }
`;

const NavImg = styled.img`
  transition: 0.5s;
  width: calc(5rem + 10vw);
  :hover {
    width: calc(120px + 10vw);
  }
`;

const NavItem = styled.div`
  color: #f2f2f2;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  font-weight: 100;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  align-content: center;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: calc(10rem + 5vw);
  border-radius: 1rem;
  transition: 0.3s;
`;

const WaxImg = styled.img`
  padding: 0;
  transition: 0.3s;
  width: calc(1rem + 2vw);
  height: calc(1rem + 2vw);
`;

const PriceParagraph = styled.p`
  font-size: calc(1rem + 1vw);
  padding: calc(0.1rem + 0.5vw);
  margin: 0;
`;
