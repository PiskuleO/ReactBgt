import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import tools from "../fwtools.json";

export function FarmersWorld() {
  const [fwwprice, setFwwprice] = useState(0);
  const [fwfprice, setFwfprice] = useState(0);
  const [fwgprice, setFwgprice] = useState(0);
  const lowestroi = tools.reduce((lastlowest, tool) => {
    const { roi } = computeroi(tool, fwgprice, fwwprice, fwfprice);
    return roi < lastlowest ? roi : lastlowest;
  }, Number.MAX_SAFE_INTEGER);

  useEffect(() => {
    (async () => {
      const fwwtowax = await (
        await fetch("https://wax.alcor.exchange/api/markets/104")
      ).json();
      setFwwprice(parseFloat(fwwtowax.last_price));

      const fwftowax = await (
        await fetch("https://wax.alcor.exchange/api/markets/105")
      ).json();
      setFwfprice(parseFloat(fwftowax.last_price));

      const fwgtowax = await (
        await fetch("https://wax.alcor.exchange/api/markets/106")
      ).json();
      setFwgprice(parseFloat(fwgtowax.last_price));
    })();
  }, []);
  return (
    <Wrapper>
      <Background></Background>
      <MainCard>
        <GameImg src="/static/header-logo-mobile.png" alt="Logo"></GameImg>
        <MainTitle>ROI & STATS</MainTitle>
        <Prices>
          <PriceTitle>LOWEST ROI: {lowestroi} Days</PriceTitle>
          <Tokens>
            <TokenPrice>
              FWW:￦{Math.round(10000 * fwwprice) / 10000}
            </TokenPrice>
            <TokenPrice>
              FWF: ￦{Math.round(10000 * fwfprice) / 10000}
            </TokenPrice>
            <TokenPrice>
              FWG: ￦{Math.round(10000 * fwgprice) / 10000}
            </TokenPrice>
          </Tokens>
        </Prices>
        <Cards>
          <Section>WOOD</Section>
          {tools.map((asset) => {
            if (asset.type === "wood") {
              const { cycle, roi } = computeroi(
                asset,
                fwgprice,
                fwwprice,
                fwfprice
              );
              const daily = Math.round(cycle * 24 * 100) / 100;
              return (
                <ItemCardPadding>
                  <ItemCard>
                    <ItemImg
                      src={`https://ipfs.atomichub.io/ipfs/${encodeURIComponent(
                        asset.img
                      )}`}
                      alt="asset"
                    />
                    <ItemInfo>ROI: {roi} Days</ItemInfo>
                    <ItemInfo>DAILY: {daily} ￦</ItemInfo>
                  </ItemCard>
                </ItemCardPadding>
              );
            }
          })}
          <Section>FOOD</Section>
          {tools.map((asset) => {
            if (asset.type === "food") {
              const { cycle, roi } = computeroi(
                asset,
                fwgprice,
                fwwprice,
                fwfprice
              );
              const daily = Math.round(cycle * 24 * 100) / 100;
              return (
                <ItemCardPadding>
                  <ItemCard>
                    <ItemImg
                      src={`https://ipfs.atomichub.io/ipfs/${encodeURIComponent(
                        asset.img
                      )}`}
                      alt="asset"
                    />
                    <ItemInfo>ROI: {roi} Days</ItemInfo>
                    <ItemInfo>DAILY: {daily} ￦</ItemInfo>
                  </ItemCard>
                </ItemCardPadding>
              );
            }
          })}
          <Section>GOLD</Section>
          {tools.map((asset) => {
            if (asset.type === "gold") {
              const { cycle, roi } = computeroi(
                asset,
                fwgprice,
                fwwprice,
                fwfprice
              );
              const daily = Math.round(cycle * 24 * 100) / 100;
              return (
                <ItemCardPadding>
                  <ItemCard>
                    <ItemImg
                      src={`https://ipfs.atomichub.io/ipfs/${encodeURIComponent(
                        asset.img
                      )}`}
                      alt="asset"
                    />
                    <ItemInfo>ROI: {roi} Days</ItemInfo>
                    <ItemInfo>DAILY: {daily} ￦</ItemInfo>
                  </ItemCard>
                </ItemCardPadding>
              );
            }
          })}
        </Cards>
      </MainCard>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

export const Background = styled.div`
  background: url("/static/Background2.png");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  position: fixed;
  inset: 0;
  z-index: -1;
`;

export const MainCard = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  border-radius: 1rem;
  color: white;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(5rem + 65vw);
  padding: calc(2rem + 1vw);
  padding-top: calc(1rem + 3vw);
  padding-bottom: calc(1rem + 3vw);
`;

export const GameImg = styled.img`
  width: calc(8rem + 10vw);
`;

export const MainTitle = styled.p`
  font-family: "Montserrat", sans-serif;
  text-align: center;
  font-weight: 600;
  font-size: calc(1.5rem + 3vw);
  color: white;
  margin: 0;
  text-shadow: 4px 10px 8px black;
  padding: 1rem;
`;

export const Prices = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  border-radius: 1rem;
  color: white;
  transition: 0.3s;
  padding: calc(0.2rem + 1vw);
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(1rem + 55vw);
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);
  }
`;

export const PriceTitle = styled.p`
  font-family: "Montserrat", sans-serif;
  text-align: center;
  font-weight: 400;
  font-size: calc(1rem + 1vw);
  color: white;
  margin: 0px;
`;

const TokenPrice = styled.p`
  font-size: calc(0.5rem + 1vw);
  padding: calc(0.1rem + 1vw);
  margin: 0;
  padding-bottom: 0;
`;

export const Tokens = styled.div`
  display: flex;
  justify-items: center;
  border-radius: 1rem;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Section = styled.div`
  font-family: "Montserrat", sans-serif;
  text-align: center;
  font-weight: 300;
  font-size: calc(20px + 2vw);
  color: white;
  margin: 0;
  text-shadow: 4px 10px 8px black;
  padding: calc(0.5rem + 1vw);
  width: 100%;
`;

const ItemCardPadding = styled.div`
  padding: calc(0.1rem + 1vw);
`;

const ItemCard = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  transition: 0.3s;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);
  }
  padding: calc(0.5rem + 0.5vw);
  padding-left: calc(0.5rem + 1vw);
  padding-right: calc(0.5rem + 1vw);
`;

const ItemImg = styled.img`
  width: calc(1rem + 5vw);
  padding-bottom: 0.5rem;
  padding-top: 0px;
`;

const ItemInfo = styled.p`
  font-size: calc(8px + 0.5vw);
  margin: 0;
`;
function computeroi(
  asset: {
    name: string;
    img: string;
    rarity: string;
    type: string;
    chargetime: number;
    energyconsume: number;
    durabilityconsume: number;
    reward: number;
    goldcost: number;
    woodcost: number;
    pos: number;
  },
  fwgprice: number,
  fwwprice: number,
  fwfprice: number
) {
  let rewardCoefficient;
  switch (asset.type) {
    case "wood":
      rewardCoefficient = fwwprice;
      break;
    case "food":
      rewardCoefficient = fwfprice;
      break;
    case "gold":
      rewardCoefficient = fwgprice;
      break;
    default:
      throw new Error("Uknknown asset type");
  }
  const itemprice = asset.goldcost * fwgprice + asset.woodcost * fwwprice;
  const cycle =
    (asset.reward * rewardCoefficient -
      (asset.energyconsume * 0.2 * fwfprice +
        asset.durabilityconsume * 0.2 * fwgprice)) /
    asset.chargetime;
  const roi = Math.round((itemprice / cycle / 24) * 1) / 1;
  return { cycle, roi };
}
