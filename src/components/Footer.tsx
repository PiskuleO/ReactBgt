import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export function Footer() {
  return (
    <MainFooter>
      <FooterLink to="credits">Credits</FooterLink>
      <FooterText>YOU CAN ALSO BUY ME A COFFEE: BGTDONATIONS</FooterText>
    </MainFooter>
  );
}

const MainFooter = styled.footer`
  text-align: center;
  background-color: rgba(0, 0, 0, 1);
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 100;
  font-style: italic;
  font-size: calc(0.7rem + 0.5vw);
  padding: 1rem;
  transition: 3s;
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: calc(0.7rem + 0.5vw);
  :hover {
    border-bottom: solid white 0.1rem;
  }
`;

const FooterText = styled.p`
  font-size: 1rem;
  margin: 0px;
  padding: 1rem;
`;
