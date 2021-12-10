import { useParams } from "react-router-dom";

interface RouteParmas {
    coinId: string;
}

const Coin = () => {
    const { coinId } = useParams() as RouteParmas;
    console.log(coinId)
    return <h1>Coin: {coinId}</h1>
}

export default Coin;