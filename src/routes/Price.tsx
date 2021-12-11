import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";

// price url https://api.coinpaprika.com/v1/tickers/btc-bitcoin
// general : `https://api.coinpaprika.com/v1/tickers/${coinId}`

interface PriceProps {
    coinId: string;
}


const Price = ({ coinId }: PriceProps) => {

    const { isLoading, data } = useQuery(["ohlcv", coinId], () => fetchCoinHistory(coinId));

    return <h1>Price</h1>
}

export default Price;