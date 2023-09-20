import { useState } from 'react';
import { getCoinsPaginated, formatCoins } from '../services/cryptos.js';
import { useEffect } from 'react';

function Market () {
	const [currentPage, setCurrentPage] = useState(1);
	const [data, setData] = useState(null);
	const paginationBtns = (() => {
		const pBtns = [];
		for (let i = 1; i <= 5; i++) {
			pBtns.push(
				<button
					key={i}
					onClick={() => setCurrentPage(i)}
					className={
						'text-center aspect-square h-8 border-2 text-white rounded-full' +
						(i === currentPage ? ' border-own-pink' : ' border-white')
					}
				>
					{i}
				</button>
			);
		}
		return pBtns;
	})();

	useEffect(() => {
		const getData = async () => {
			const market = await getCoinsPaginated(10, currentPage);
			setData(market);
		};
		getData();
	}, [currentPage]);

	return (
		<section id="markets" className="pt-28 w-full bg-dark-purple text-white flex flex-col items-center">
			<h2 className="text-5xl mb-5">Markets</h2>
			<table className="relative w-4/5 text-sm text-left px-4 overflow-x-auto">
				<thead className="text-sm uppercase bg-gradient-to-bl from-light-purple to-own-pink">
					<tr>
						<th className="px-3 py-2">Coin</th>
						<th className="px-3 py-2">Price</th>
						<th className="px-3 py-2">24h Change</th>
						<th className="px-3 py-2">MarketCap</th>
					</tr>
				</thead>
				<tbody className="text-sm">
					{
						formatCoins(data)?.map((c) =>
							(
								<tr key={c.id} className="border-b">
									<td className="px-3 py-2">{c.name}</td>
									<td className="px-3 py-2">{c.currentPrice}</td>
									<td className="px-3 py-2">{c.priceChange24h}</td>
									<td className="px-3 py-2">{c.marketCap}</td>
								</tr>
							)
						)
					}
				</tbody>
			</table>
			<div className="w-4/5 flex flex-nowrap justify-center items-center gap-8 py-5">
				{
					paginationBtns.map(e =>
						e
					)
				}
			</div>
		</section>
	);

}

export default Market;