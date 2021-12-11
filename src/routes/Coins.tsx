import styled from "styled-components";
import { Link } from "react-router-dom"
import { useQuery } from "react-query";
import { fetchCoins } from "../api";

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin:0 auto;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const DarkModeBtn = styled.button`
    width: 90px;
    height: 4vh;
    color:${props => props.theme.textColor};
    background-color: ${props => props.theme.coinCardColor};
    border:0;
    border-radius: 100px;

    &:focus {
        cursor: pointer
    }
    &:hover {
        width: 100px;
        height: 5vh;
    }
`

const CoinsList = styled.ul``;

const Coin = styled.li`
    background-color: ${(props) => props.theme.coinCardColor};
    color:${props => props.theme.textColor};
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

const Img = styled.img`
    margin-right:10px;
    width: 35px;
    height: 35px;
`

interface Icoin {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}

interface ICoinsProps {
    toggleDark: () => void;
}


const Coins = ({toggleDark}: ICoinsProps) => {
    const { isLoading, data } = useQuery<Icoin[]>("allCoins", fetchCoins)

    return (
        <Container>
            <Header>
                <Title>Coins</Title>
                <DarkModeBtn onClick={toggleDark}>Dark Mode</DarkModeBtn>
            </Header>
            {isLoading ? (<Loader>Loading...</Loader>) :
                (
                    <CoinsList>
                        {
                            data?.slice(0, 100).map(coin => (
                                <Coin key={coin.id} >
                                    <Link
                                        to={`/${coin.id}`}
                                        state={{ name: coin.name, rank: coin.rank }}>
                                        <Img src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
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