import styled from "@emotion/styled";
import { Background } from "./Home";
import { MainTitle } from "./Home";
import { Wrapper } from "./Home";

export function Credits() {
  return (
    <Wrapper>
      <Background></Background>
      <MainTitle>Credits</MainTitle>
      <Banner>
        <ItemPadding>
          <Item>
            <ItemHeader>Main Backgound</ItemHeader>
            <ItemSrc href="https://www.freepik.com/">
              <ItemTitle>designed by Kjpargeter - Freepik.com</ItemTitle>
            </ItemSrc>
          </Item>

          <Item>
            <ItemHeader>Games Background</ItemHeader>
            <ItemSrc href="https://www.freepik.com/">
              <ItemTitle>designed by Upklyak - Freepik.com</ItemTitle>
            </ItemSrc>
          </Item>

          <Item>
            <ItemHeader>Mainpage Banner</ItemHeader>
            <ItemSrc href="https://www.freepik.com/">
              <ItemTitle>designed by Upklyak - Freepik.com</ItemTitle>
            </ItemSrc>
          </Item>
        </ItemPadding>
      </Banner>
    </Wrapper>
  );
}

const Banner = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: auto;
  transition: 0.3s;
  border-radius: 1rem;
  width: calc(15rem + 30vw);
  transition: 0.3s;
  border-radius: 1rem;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);
  margin: 0;
  :hover {
    box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 1);
  }
`;

const ItemPadding = styled.div`
  padding: calc(1px + 1vw);
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

const Item = styled.div`
  padding: calc(8px + 0.5vw);
`;

const ItemHeader = styled.p`
  font-family: "Montserrat", sans-serif;
  text-align: center;
  font-weight: 600;
  font-size: calc(8px + 2vw);
  color: white;
  text-shadow: 4px 10px 8px black;
  margin: 0;
  padding-bottom: calc(1px + 1vw);
`;

const ItemSrc = styled.a`
  text-decoration: none;
  transition: 0.2s;
  :hover {
    text-decoration: underline;
    color: white;
  }
`;

const ItemTitle = styled.p`
  color: white;
  text-decoration: none;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: calc(4px + 1vw);
  margin: 0;
`;
