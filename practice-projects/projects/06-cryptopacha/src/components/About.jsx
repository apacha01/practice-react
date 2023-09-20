import Card from './Card';

function About () {
	return (
		<section id="about" className="pt-28 w-full bg-dark-purple text-white flex flex-col items-center">
			<h2 className="text-5xl mb-5" >About Us</h2>
			<p className="w-3/4 text-gray-300">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fugit labore quod eos eius iusto repellendus sequi blanditiis impedit nisi debitis ut, nemo, aliquid eum corporis laboriosam dicta fugiat quis?
			</p>
			<div className="md:flex flex-wrap justify-evenly items-center w-3/4">
				<Card title="Security" img="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579">
					Your data is encrypted with the safest alogrithm.
				</Card>
				<Card title="Some Title" img="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579">
					Some super convincing text.
				</Card>
				<Card title="Some Title" img="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579">
					Some super convincing text.
				</Card>
				<Card title="Some Title" img="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579">
					Some super convincing text.
				</Card>
			</div>
		</section>
	);
}

export default About;