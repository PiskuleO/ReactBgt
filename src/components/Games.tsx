import React, { useState } from "react";
import fwlogo from "../header-logo-mobile.png";
import aoglogo from "../LogoLogo+(1).png";
import { Outlet, Link } from "react-router-dom";
import styled from "@emotion/styled";

export function Games() {
  return (
    <div>
      <Background></Background>
      <MainTitle>CHOOSE YOUR GAME</MainTitle>
      <GamesMenu>
        <GamePadding>
          <GameLink to="/farmersworld">
            <GameCard>
              <GameTitle>
                FARMERS
                <br />
                WORLD
              </GameTitle>
              <GameCardImg src={fwlogo} alt="FarmersWorld logo" />
            </GameCard>
          </GameLink>
        </GamePadding>

        <GamePadding>
          <GameLink to="/arenaofglory">
            <GameCard>
              <GameTitle>
                ARENA OF <br /> GLORY
              </GameTitle>
              <GameCardImg src={aoglogo} alt="ArenaOfGlory logo" />
            </GameCard>
          </GameLink>
        </GamePadding>
      </GamesMenu>
    </div>
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

const MainTitle = styled.p`
  font-family: "Montserrat", sans-serif;
  text-align: center;
  font-weight: 600;
  font-size: calc(1rem + 4vw);
  color: white;
  text-shadow: 4px 10px 8px black;
`;

const GamesMenu = styled.div`
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const GameCard = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  border-radius: 1rem;
  color: white;
  transition: 0.3s;
  padding: 2rem;
  height: calc(10rem + 9vw);
  width: calc(10rem + 9vw);
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);
  }
`;

const GameCardImg = styled.img`
  padding-top: 0.5rem;
  width: calc(5rem + 10vw);
`;

const GameLink = styled(Link)`
  text-align: center;
  font-weight: 400;
  font-size: 3rem;
  text-decoration: none;
`;

const GameTitle = styled.p`
  margin: 0px;
  font-size: calc(1rem + 1vw);
`;

const GamePadding = styled.div`
  padding: calc(1rem + 5vw);
`;
