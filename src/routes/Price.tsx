// price url https://api.coinpaprika.com/v1/tickers/btc-bitcoin
// general : `https://api.coinpaprika.com/v1/tickers/${coinId}`

interface PriceProps {
    coinId: string;
}


const Price = ({ coinId }: PriceProps) => {
    return <h1>Price</h1>
}

export default Price;