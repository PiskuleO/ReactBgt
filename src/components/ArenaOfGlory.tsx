import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Background } from "./FarmersWorld";
import { Wrapper } from "./FarmersWorld";
import { MainTitle } from "./FarmersWorld";
import { MainCard } from "./FarmersWorld";
import { GameImg } from "./FarmersWorld";
import { Prices } from "./FarmersWorld";
import { Tokens } from "./FarmersWorld";
import styled from "@emotion/styled";
import glads from "../glads.json";
import { useWaxprice } from "./Header";

export function ArenaOfGlory() {
  const waxprice = useWaxprice();
  const [gladrank, setGladrank] = useState("Common");
  const [aoggprice, setAoggprice] = useState(0);
  const rarityNameToValue = useMemo(() => {
    return new Map([
      ["Common", 0],
      ["Uncommon", 1],
      ["Rare", 2],
      ["Epic", 3],
      ["Legendary", 4],
      ["Mythic", 5],
    ]);
  }, []);

  const rarity = useCallback(
    (quest: {
      rarity: string;
      lengthHours: number;
      gladCount: number;
      reward: number;
    }) => {
      return (
        rarityNameToValue.get(gladrank)! + 1 >=
        rarityNameToValue.get(quest.rarity)!
      );
    },
    [rarityNameToValue, gladrank]
  );

  useEffect(() => {
    (async () => {
      const aoggwax = await (
        await fetch("https://wax.alcor.exchange/api/markets/188")
      ).json();
      setAoggprice(parseFloat(aoggwax.last_price));
    })();
  }, []);
  return (
    <Wrapper>
      <Background></Background>
      <MainCard>
        <GameImg src="/static/LogoLogo+(1).png" alt="Logo"></GameImg>
        <MainTitle>PROFIT TABLE</MainTitle>
        <GladCardPadding>
          <GladCard src={`/static/${encodeURIComponent(gladrank)}.png`} />
        </GladCardPadding>
        <GladSelectPadding>
          <GladSelect
            onChange={(event) => {
              setGladrank(event.target.value);
            }}
          >
            <option value="Common">Common</option>
            <option value="Uncommon">Uncommon</option>
            <option value="Rare">Rare</option>
            <option value="Epic">Epic</option>
            <option value="Legendary">Legendary</option>
          </GladSelect>
        </GladSelectPadding>
        <Prices>
          <Tokens>
            <TokenPrice>
              AOGG: ￦{Math.round(aoggprice * 100000) / 100000}
            </TokenPrice>
          </Tokens>
        </Prices>
        <TableCenter>
          <TableOverflow>
            <GladTable>
              <thead>
                <tr>
                  <GladTableTh>Adventure Rarity</GladTableTh>
                  <GladTableTh>Lenght</GladTableTh>
                  <GladTableTh>Gladiator req</GladTableTh>
                  <GladTableTh>Reward</GladTableTh>
                  <GladTableTh>WAX</GladTableTh>
                  <GladTableTh>USDT</GladTableTh>
                </tr>
              </thead>
              <tbody>
                {glads.filter(rarity).map((quest) => {
                  const profitinwax =
                    Math.round(quest.reward * aoggprice * 100) / 100;
                  const profitinusd =
                    Math.round(quest.reward * aoggprice * waxprice * 100) / 100;
                  return (
                    <tr key={quest.reward}>
                      <GladTableTd>{quest.rarity}</GladTableTd>
                      <GladTableTd>{quest.lengthHours}h</GladTableTd>
                      <GladTableTd>{quest.gladCount}</GladTableTd>
                      <GladTableTd>{quest.reward}</GladTableTd>
                      <GladTableTd>￦{profitinwax}</GladTableTd>
                      <GladTableTd>${profitinusd}</GladTableTd>
                    </tr>
                  );
                })}
              </tbody>
            </GladTable>
          </TableOverflow>
        </TableCenter>
      </MainCard>
    </Wrapper>
  );
}

const TokenPrice = styled.p`
  font-size: calc(0.5rem + 1vw);
  margin: 0;
  padding-bottom: 0;
`;

const GladCard = styled.img`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  width: calc(1rem + 15vw);
  padding: calc(1px + 1vw);
  transition: 0.3s;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);
  }
`;

const GladCardPadding = styled.div`
  padding: calc(0.1rem + 3vw);
`;

const GladSelectPadding = styled.div`
  padding: calc(0.1rem + 1vw);
`;

const GladSelect = styled.select`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 1rem;
  padding: calc(0.1rem + 0.5vw);
  font-family: "Montserrat", sans-serif;
  text-align: center;
  border-color: rgba(0, 0, 0, 0.5);
`;

const GladTable = styled.table`
  border-collapse: collapse;
  text-align: left;
  margin: 0;
`;

const GladTableTh = styled.th`
  padding: calc(0.1rem + 1vw);
  font-size: calc(0.1rem + 1.5vw);
`;

const GladTableTd = styled.td`
  padding: 0.5rem;
  padding-right: calc(0.1rem + 1vw);
  padding-left: calc(0.1rem + 1vw);
  font-size: calc(0.5rem + 1vw);
`;

const TableOverflow = styled.div`
  overflow: auto;
`;

const TableCenter = styled.div`
  display: flex;
  justify-content: center;
  align-self: stretch;
`;
