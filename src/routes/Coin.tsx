import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

interface RouteParmas {
    coinId: string;
}

interface RouterState {
    name?:string;
    rank?:number;
}



interface InfoData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    contract: string;
    platform: string;
    // contracts: object;
    // parent: object;
    // tags: object;
    // team: object;
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    // links: object;
    // links_extended: object;
    // whitepaper: object;
    first_data_at: string;
    last_data_at: string;
}

interface IPrice {
    ath_date: string;
    ath_price: number;
    market_cap: number;
    market_cap_change_24h: number;
    percent_change_1h: number;
    percent_change_1y: number;
    percent_change_6h: number;
    percent_change_7d: number;
    percent_change_12h: number;
    percent_change_15m: number;
    percent_change_24h: number;
    percent_change_30d: number;
    percent_change_30m: number;
    percent_from_price_ath: number;
    price: number;
    volume_24h: number;
    volume_24h_change_24h: number;
}

interface IUSD {
    USD: IPrice;
}

interface PriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: IUSD;
}

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

const Title = styled.h1`
    color:${props => props.theme.accentColor};
    font-size: 48px;
`

const Loader = styled.span`
    display: block;
    text-align: center;
`;

const Coin = () => {

    const { coinId } = useParams() as RouteParmas; // 이건 coinId을 (Param) 받음
    const [loading, setLoading] = useState(true);
    const { state } = useLocation(); // Link state로 내려준 값을 받을 수 있다.
    const [info, setInfo] = useState({});
    const [priceInfo, setPriceInfo] = useState({});


    const name = state?.name || "loading..." as RouterState;
    const rank = state?.rank || 0 as RouterState;
    // 문제는 버튼을 눌러야 Location 정보가 넘어간다.

    useEffect(() => {
        (async () => {
            const infoData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
            const priceData = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json()
            setInfo(infoData);
            setPriceInfo(priceData);

            console.log(infoData)
            console.log(priceData.quotes.USD.price)
             })();
    }, [])
    return (
        <Container>
            <Header>
                <Title>{name}</Title>
            </Header>
            { loading ? (<Loader>Loading...</Loader>) : null}
        </Container>
    )
}

export default Coin;