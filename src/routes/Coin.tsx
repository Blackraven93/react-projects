import { useLocation, useParams } from "react-router-dom";
import { Routes, Route, useMatch } from "react-router-dom";
import { Link } from "react-router-dom"
import Price from './Price'
import Chart from './Chart'
import styled from "styled-components";
import { useQuery } from "react-query";
import { fetchCoinInfo, fetchCoinPrice } from "../api";

interface RouteParmas {
    coinId: string;
}

interface RouterState {
    name?: string;
    rank?: number;
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
    quotes: {
        USD: {
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
            volume_24h: number;
            volume_24h_change_24h: number;
            price: number;
        }
    };
}


const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin:0 auto;
`;

const Header = styled.header`
    height: 12vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

const Title = styled.h1`
    color:${props => props.theme.accentColor};
    font-size: 48px;
`
const BackBtn = styled.button`
    width: 90px;
    height: 4vh;
    color:${props => props.theme.textColor};
    background-color: ${props => props.theme.coinCardColor};
    border:0;
    border-radius: 100px;
    &:hover {
        width: 100px;
        height: 5vh;
    }
`

const Loader = styled.span`
    display: block;
    text-align: center;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  color:${props => props.theme.textColor};
  background-color: ${props => props.theme.coinCardColor};
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  margin: 30px 0px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: ${props => props.theme.coinCardColor};
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
        props.isActive ? props.theme.accentColor : props.theme.textColor};
  font-weight: ${(props) =>
        props.isActive && props.theme.fontWeightBold};
  a {
    display: block;
  }
`;

interface ICoinProps {
    isDark:boolean
}

const Coin = ({isDark}:ICoinProps) => {

    const { coinId } = useParams() as RouteParmas; // 이건 coinId을 (Param) 받음
    const { state } = useLocation(); // Link state로 내려준 값을 받을 수 있다.
    // 문제는 버튼을 눌러야 Location 정보가 넘어간다.
    const name = state?.name || "loading..." as RouterState;
    const rank = state?.rank || 0 as RouterState;

    const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(["info", coinId], () => fetchCoinInfo(coinId))
    const { isLoading: priceLoading, data: priceData } = useQuery<PriceData>(["price", coinId], () => fetchCoinPrice(coinId))

    const priceMatch = useMatch("/:coinId/price")
    const chartMatch = useMatch("/:coinId/chart") // 어디에 있는지 알려줌

    // const [loading, setLoading] = useState(true);
    // const [info, setInfo] = useState<InfoData>();
    // const [priceInfo, setPriceInfo] = useState<PriceData>();
    // useEffect(() => {
    //     (async () => {
    //         const infoData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
    //         const priceData = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json()
    //         setInfo(infoData);
    //         setPriceInfo(priceData);
    //         setLoading(false);
    //     })();
    // }, [coinId])

    const loading = infoLoading || priceLoading;
    return (
        <Container>
            <Header>
                <Title>
                    {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
                </Title>
                <BackBtn>
                    <Link to='/'> Home </Link>
                </BackBtn>
            </Header>
            {loading ? (<Loader>Loading...</Loader>) : (
                <>
                    <Overview>
                        <OverviewItem>
                            <span>Rank:</span>
                            <span>{infoData?.rank}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Symbol:</span>
                            <span>${infoData?.symbol}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Open Source:</span>
                            <span>{infoData?.open_source ? "Yes" : "No"}</span>
                        </OverviewItem>
                    </Overview>
                    <Description>{infoData?.description}</Description>
                    <Overview>
                        <OverviewItem>
                            <span>Total Suply:</span>
                            <span>{priceData?.total_supply}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Max Supply:</span>
                            <span>{priceData?.max_supply}</span>
                        </OverviewItem>
                    </Overview>

                    <Tabs>
                        <Tab isActive={chartMatch !== null}>
                            <Link to={`/${coinId}/chart`}>Chart</Link>
                        </Tab>
                        <Tab isActive={priceMatch !== null}>
                            <Link to={`/${coinId}/price`}>Price</Link>
                        </Tab>
                    </Tabs>

                    {/* <Link to={`/${coinId}/price`}>Price</Link>
                    <Link to={`/${coinId}/chart`}>Chart</Link> */}
                    <Routes>
                        <Route
                            path="price"
                            element={<Price coinId={coinId} />} />
                        <Route
                            path="chart"
                            element={<Chart coinId={coinId} isDark={isDark} />} />
                    </Routes>
                </>
            )}
        </Container>
    )
}

export default Coin;