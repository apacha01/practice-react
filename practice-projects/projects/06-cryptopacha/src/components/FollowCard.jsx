function FollowCard ({ legend, children }) {
	return (
		<div className="w-1/3 flex gap-2 flex-col justify-evenly items-center text-own-pink">
			<p className="text-base max-w-prose text-center">{legend}</p>
			{children}
		</div>
	);
}

export default FollowCard;