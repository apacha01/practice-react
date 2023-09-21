import { useParams } from 'react-router-dom';
import coin from '../mocks/btc.json';
import { formatNumber } from '../services/cryptos';

function Coin () {
	// const { id } = useParams();

	return (
		<section className="w-full p-12 bg-dark-purple text-white">
			<div className="flex justify-evenly my-8">
				<img src={coin.image.large} alt={coin.name} />
				<div className="flex flex-wrap items-center justify-evenly text-center">
					<h1 className="text-4xl w-full">
						{coin.name}
					</h1>
					<h2 className="text-2xl w-2/5">
						Rank #{coin.market_cap_rank}
					</h2>
					<h3 className="text-2xl w-2/5">
						Symbol: {coin.symbol}
					</h3>
					<div className="flex flex-col bg-white/20 p-2">
						<h4 className={coin.market_data?.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'}>
							Price Change 24h
						</h4>
						<p className="">{coin.market_data?.price_change_percentage_24h.toFixed(2) + '%'}</p>
					</div>
					<div className="flex flex-col bg-white/20 p-2">
						<h4 className="">Market Cap</h4>
						<p className="">{formatNumber(coin.market_data?.market_cap.usd)}</p>
					</div>
					<div className="flex flex-col bg-white/20 p-2">
						<h4 className="">Price</h4>
						<p className="">{formatNumber(coin.market_data?.current_price.usd)}</p>
					</div>
				</div>
			</div>
			<p className="my-4">{coin.description.en}</p>
		</section>
	);
}

export default Coin;