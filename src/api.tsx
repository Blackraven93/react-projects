
const BASE_URL = "https://api.coinpaprika.com/v1";

// Coins.tsx
export const fetchCoins = () => {

    return fetch(`${BASE_URL}/coins`).then(response => response.json());

}


// Coin.tsx
export const fetchCoinInfo = (coinId: string) => {
    return fetch(`${BASE_URL}/coins/${coinId}`).then(response => response.json());
}

export const fetchCoinPrice = (coinId: string) => {
    return fetch(`${BASE_URL}/tickers/${coinId}`).then(response => response.json());
}

// Chart.tsx

export const fetchCoinHistory = (coinId: string) => {
    const endDate = Math.floor(Date.now() / 1000)
    const startDate = endDate - (60 * 60 * 24 * 7 * 2);
    return fetch(`${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`)
        .then(response => response.json()) // data 넘겨주기 체크
}