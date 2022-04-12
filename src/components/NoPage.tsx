import React, { useState } from "react";
import styled from "@emotion/styled";

export function NoPage() {
  return (
    <Wrapper>
      <Background></Background>
      <MainTitle>404</MainTitle>
      <SubTitle>PAGE NOT FOUND</SubTitle>
    </Wrapper>
  );
}

const Background = styled.div`
  background: url("/static/Background2.png");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  position: fixed;
  inset: 0;
  z-index: -1;
`;

const Wrapper = styled.div`
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const MainTitle = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: calc(5rem + 3vw);
  margin: 0;
  color: white;
  text-shadow: 4px 10px 8px black;
`;

const SubTitle = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-style: italic;
  font-size: calc(1rem + 3vw);
  margin: 0;
  color: white;
  text-shadow: 4px 10px 8px black;
`;
