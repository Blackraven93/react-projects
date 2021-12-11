import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface IHistorical {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}

interface ChartProps {
    coinId: string;
}

const Chart = ({ coinId }: ChartProps) => {

    const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId));

    const openDate = (data: any) => {
        return data?.map((price: any) => {
            const timeOpen = new Date(price["time_open"])
            return [timeOpen.getTime(), [price["open"], price["high"], price["low"], price["close"]]]
            })
        }

    const closeDate = (data: any) => {
        return data?.map((price: any) => {
            const timeClose = new Date(price["time_close"])
            return [timeClose.getTime(), [price["open"], price["high"], price["low"], price["close"]]]
            })
        }

    return (
        <div>
            { isLoading ?
                "Loading chart..." :
                (<ApexChart
                    type="candlestick"
                    series={[
                        {
                            name: "Open Price",
                            data: openDate(data),
                        },
                        // {
                        //     name: "Close Price",
                        //     data: closeDate(data),
                        // }
                    ]}
                    options={{
                        theme: {
                            mode: "dark",
                        },
                        chart: {
                            height: 700,
                            width: 300,
                            background: "transparent",
                            toolbar: {
                                autoSelected: "pan",
                                show: false
                              },
                              zoom: {
                                enabled: false
                            }
                        },
                        plotOptions: {
                            candlestick: {
                              colors: {
                                upward: "#B5E5CF",
                                downward: "#FCB5AC"
                              }
                            }
                        },
                        stroke: {
                            curve: "smooth",
                            width: 2,
                        },
                        yaxis: {

                            show: false,
                        },
                        xaxis: {
                            type: "datetime",
                            categories: data?.map((price) => price.time_close),
                        },
                        title: {
                            text: "Open Time Chart",
                            align: "left"
                        },
                        tooltip: {
                            y: {
                                formatter: (value) => `$${value.toFixed(2)}`,
                            },
                        },
                    }}
                />
            )}
            {isLoading ?
                "Loading chart..." :
                (<ApexChart
                    type="candlestick"
                    series={[
                        {
                            name: "Open Price",
                            data: closeDate(data),
                        },
                        // {
                        //     name: "Close Price",
                        //     data: closeDate(data),
                        // }
                    ]}
                    options={{
                        theme: {
                            mode: "dark",
                        },
                        chart: {
                            height: 700,
                            width: 500,
                            background: "transparent",
                            toolbar: {
                                autoSelected: "pan",
                                show: false
                              },
                              zoom: {
                                enabled: false
                              }
                        },
                        plotOptions: {
                            candlestick: {
                              colors: {
                                upward: "#B5E5CF",
                                downward: "#FCB5AC"
                              }
                            }
                        },
                        stroke: {
                            curve: "smooth",
                            width: 2,
                        },
                        yaxis: {
                            show: false,
                        },
                        xaxis: {
                            type: "datetime",
                            categories: data?.map((price) => price.time_close),
                        },
                        title: {
                            text: "Close Time Chart",
                            align: "left"
                        },
                        tooltip: {
                            y: {
                                formatter: (value) => `$${value.toFixed(2)}`,
                            },
                        },
                    }}
                />
            )}
        </div>
    )
}

export default Chart;