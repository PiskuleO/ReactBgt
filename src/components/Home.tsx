import React, { useState } from "react";
import banner from "../Banner.jpg";
import styled from "@emotion/styled";

export function Home() {
  return (
    <Wrapper>
      <Background></Background>
      <MainTitle>
        WELCOME TO BLOCKCHAIN <br /> GAMING TOOLS!
      </MainTitle>
      <BannerPadding>
        <Banner src={banner} alt="banner" />
      </BannerPadding>
    </Wrapper>
  );
}

const Background = styled.div`
  background: url("/static/Space.png");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  position: fixed;
  inset: 0;
  z-index: -1;
`;

const MainTitle = styled.p`
  font-family: "Montserrat", sans-serif;
  text-align: center;
  font-weight: 600;
  font-size: calc(1.5rem + 3vw);
  color: white;
  text-shadow: 4px 10px 8px black;
`;

const Banner = styled.img`
  width: auto;
  transition: 0.3s;
  border-radius: 1rem;
  width: calc(3rem + 60vw);
  transition: 0.3s;
  border-radius: 1rem;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);
  margin: 0;
  :hover {
    box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 1);
  }
`;

const BannerPadding = styled.div`
  padding: 3rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
