import Chart from 'react-apexcharts'
const CandleStickChart = () => {
    const options = {
        chart: {
            type: "candlestick",
            height: 330,
            width: '100%',
            toolbar: {
                show: false, // Hide the toolbar
            },
        },
        xaxis: {
            type: "datetime"
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        },
        plotOptions: {
            candlestick: {
                colors: {
                    upward: "#3380FF",
                    downward: "#C0D9FD"
                }
            }
        }
    };

    const series = [
        {
            data: [
                {
                    x: new Date("2024-06-27").getTime(),
                    y: [199550, 199550, 199550, 200550]

                },
                {
                    x: new Date("2024-06-28").getTime(),
                    y: [200550, 200550, 200550, 200550]
                },
                {
                    x: new Date("2024-06-29").getTime(),
                    y: [200550, 200550, 200550, 200550]
                },
                {
                    x: new Date("2024-06-30").getTime(),
                    y: [200550, 200550, 200550, 200550]
                },
            ]
        }
    ];

    return (
        <div className={'h-full w-full'}>
            <div className={'2xl:mb-6 block sm:flex justify-between items-center'}>
                <h2 className={'cardTitle'}>Balance: $200,456.00</h2>
                <div className={'flex justify-between gap-x-2 mt-2 sm:mt-0'}>
                    <button className={'filterBtn'}>BALANCE</button>
                    <button className={'filterBtn'}>EQUITY</button>
                </div>
            </div>
            <div className={'h-full w-full'}>
                {/*<div className="chart-container" style={{ height: `${chartHeight}px` }}>*/}
                    <Chart options={options} series={series} type="line" height={230}/>
                {/*</div>*/}
            </div>
        </div>
    )
};

export default CandleStickChart;
