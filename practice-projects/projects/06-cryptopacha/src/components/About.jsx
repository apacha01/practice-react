function About () {
	return (
		<section className="pt-28 w-full bg-dark-purple text-white flex flex-col items-center">
			<h2 className="text-5xl mb-5" >About Us</h2>
			<p className="w-3/4 text-gray-300">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fugit labore quod eos eius iusto repellendus sequi blanditiis impedit nisi debitis ut, nemo, aliquid eum corporis laboriosam dicta fugiat quis?
			</p>
			<div className="md:flex flex-wrap justify-evenly items-center w-3/4">
				<div className="md:w-2/5 m-2 rounded-3xl border-2 border-gray-400/25 bg-white/5 p-5">
					<div className="flex flex-col items-center gap-5">
						<img src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579" alt="Some Image" />
						<h3 className="text-bold text-2xl" >Security</h3>
						<p className="" >Your data is encrypted with the safest alogrithm.</p>
					</div>
				</div>
				<div className="md:w-2/5 m-2 rounded-3xl border-2 border-gray-400/25 bg-white/5 p-5">
					<div className="flex flex-col items-center gap-5">
						<img src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579" alt="Some Image" />
						<h3 className="text-bold text-2xl" >Some title</h3>
						<p className="" >Some super convincing text.</p>
					</div>
				</div>
				<div className="md:w-2/5 m-2 rounded-3xl border-2 border-gray-400/25 bg-white/5 p-5">
					<div className="flex flex-col items-center gap-5">
						<img src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579" alt="Some Image" />
						<h3 className="text-bold text-2xl" >Some title</h3>
						<p className="" >Some super convincing text.</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;