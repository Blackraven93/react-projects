import styled from "styled-components";
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin:0 auto;
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
    color:${props => props.theme.bgColor};
    padding: 20px;
    border-radius: 15px;
    margin-bottom: 10px;
    a {
        display:flex;
        align-items: center;
        transition: all 0.3s ease-in;
    }
    &:hover {
        a {
            padding: 10px;
            color: ${(props) => props.theme.accentColor};
            font-weight: bolder;
        }
    }
`;

const Title = styled.h1`
    color:${props => props.theme.accentColor};
    font-size: 48px;
`

const Loader = styled.span`
    display: block;
    text-align: center;
`

interface CoinInterface {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}

const Img = styled.img`
    margin-right:10px;
    width: 35px;
    height: 35px;
`



const Coins = () => {

    const [coins, setCoins] = useState<CoinInterface[]>([])
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        (async () => {
            const response = await fetch("https://api.coinpaprika.com/v1/coins")
            const json = await response.json();
            setCoins(json.slice(0, 100))
            setLoading(false);
            })();
    }, []) 

    return (
        <Container>
            <Header>
                <Title>Coins</Title>
            </Header>
            { loading ? (<Loader>Loading...</Loader>) : 
                (
                    <CoinsList>
                        {
                        coins.map(coin => (
                            <Coin key={coin.id} >
                                <Link 
                                    to={`/${coin.id}`}
                                    state={{name:coin.name, rank:coin.rank}}
                                    >
                                    <Img src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}/>
                                    {coin.name} &rarr;
                                </Link>
                            </Coin>
                            )
                        )
                        } 
                    </CoinsList>
                )
            }
        </Container>
    )
}

export default Coins;