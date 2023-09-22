import { useParams } from 'react-router-dom';
import { getCoinById, formatNumber } from '../services/cryptos';
import { useEffect, useState } from 'react';

function Coin () {
	const { coinId } = useParams();
	const [coin, setCoin] = useState(null);

	useEffect(() => {
		const getData = async () => {
			const coinData = await getCoinById(coinId);
			setCoin(coinData);
		};
		getData();
	}, [coinId]);

	return (
		<section className="w-full p-12 bg-dark-purple text-white">
			{coin
				? <>
					<div className="flex justify-evenly my-8">
						<img src={coin.image.large} alt={coin.name} />
						<div className="flex flex-wrap items-center justify-evenly text-center">
							<h1 className="text-4xl w-full">
								{coin.name}
							</h1>
							<h2 className="text-2xl w-1/2">
						Rank #{coin.market_cap_rank}
							</h2>
							<h3 className="text-2xl w-1/2">
						Symbol: {coin.symbol}
							</h3>
							<div className="flex flex-col bg-white/20 p-3 rounded-md">
								<h4 className={`border-b mb-4 ${coin.market_data?.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
							Price Change 24h
								</h4>
								<p className="">{coin.market_data?.price_change_percentage_24h.toFixed(2) + '%'}</p>
							</div>
							<div className="flex flex-col bg-white/20 p-3 rounded-md">
								<h4 className="border-b mb-4">Market Cap</h4>
								<p className="">{formatNumber(coin.market_data?.market_cap.usd)}</p>
							</div>
							<div className="flex flex-col bg-white/20 p-3 rounded-md">
								<h4 className="border-b mb-4">Price</h4>
								<p className="">{formatNumber(coin.market_data?.current_price.usd)}</p>
							</div>
						</div>
					</div>
					<p className="my-4">{coin.description.en}</p>
				</>
				: <p className="">Loading...</p>
			}
		</section>
	);
}

export default Coin;