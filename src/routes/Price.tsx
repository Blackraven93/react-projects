import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinPrice } from "../api";

// price url https://api.coinpaprika.com/v1/tickers/btc-bitcoin
// general : `https://api.coinpaprika.com/v1/tickers/${coinId}`

interface PriceProps {
    coinId: string;
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



const ViewBox = styled.div`
    height: 4vh;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
`

const Price = ({coinId}:PriceProps) => {

    const { isLoading, data } = useQuery<PriceData>(["price", coinId], () => fetchCoinPrice(coinId))

    
    
    return (
        <div>
            <ViewBox>
                {isLoading ? "Loading..." : (
                    `Precent Price : ${data?.quotes.USD.price ? Math.floor(data?.quotes.USD.price * 1181) : 0}`
                    )}
            </ViewBox>
            <ViewBox>
                {`ATH Price : ${data?.quotes.USD.ath_price ? Math.floor(data?.quotes.USD.ath_price * 1181) : 0}`}
            </ViewBox>
        </div>
    )
}

export default Price;