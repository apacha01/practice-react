function Hero () {
	return (
		<section id="home" className="bg-purple-950">
			<div className="py-8 px-4 mx-auto text-center lg:py-16 lg:px-12">
				<h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
					Invest in the <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-800 to-pink-700">biggest</span> crypto exchange in the market
				</h1>
				<p className="mb-8 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48">
					Invest and manage all your crypto at one place.
				</p>
				<a href="#markets" type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">
					Start trading
				</a>
			</div>
		</section>
	);
}

export default Hero;