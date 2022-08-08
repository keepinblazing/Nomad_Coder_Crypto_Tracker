import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const navigate = useNavigate();
  const [coins, setCoins] = useState<CoinInterface[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      
      const json = await response.json();
      setCoins(json.slice(0,100))
     

    })();
    fetch("https://api.coinpaprika.com/v1/coins");
  }, []);
  console.log(coins)

  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      <CoinsList>
        {coins.map((coin) => (
          <Coin key={coin.id} onClick={() => navigate(`/${coin.id}`)}>
            {coin.name} &rarr;
          </Coin>
        ))}
      </CoinsList>
    </Container>
  );
}

export default Coins;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 48px;
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.textColor};
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 15px;
  a {
    transition: color 0.5s ease-in;
    display: block;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;
