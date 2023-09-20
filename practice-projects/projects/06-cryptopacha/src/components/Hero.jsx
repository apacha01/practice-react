function Hero () {
	return (
		<section id="home" className="pt-20 bg-gradient-to-b from-sky-950 via-dark-purple to-dark-purple">
			<div className="py-8 px-4 mx-auto text-center lg:py-16 lg:px-12">
				<h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
					Invest in the <span className="bg-clip-text text-transparent bg-gradient-to-b from-pink-800 to-own-pink">biggest</span> crypto exchange in the market
				</h1>
				<p className="mb-8 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48">
					Invest and manage all your crypto at one place.
				</p>
				<a href="#markets" type="button" className="focus:outline-none text-white bg-own-pink/70 border-2 border-light-purple hover:border-own-pink font-medium rounded-lg text-sm px-5 py-2.5 mb-4">
					Start trading
				</a>
			</div>
		</section>
	);
}

export default Hero;