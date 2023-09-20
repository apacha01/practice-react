function Card ({ title, children, img }) {
	return (
		<div className="md:w-2/5 m-2 rounded-3xl border-2 border-gray-400/25 bg-white/5 p-5">
			<div className="flex flex-col items-center gap-5">
				<img src={img} alt="Some Image" />
				<h3 className="text-bold text-2xl" >{title}</h3>
				<p >{children}</p>
			</div>
		</div>
	);
}

export default Card;