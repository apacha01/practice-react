function Header () {
	return (
		<header className="w-full bg-purple-800 text-white flex justify-between items-center p-6">
			<h2 className="font-bold text-3xl flex-1">CRYPTOPACHA</h2>
			<nav className="flex-1 h-full">
				<ul className="flex justify-around items-center">
					<li className="hover:underline underline-offset-4">
						<a href="#home" className="">Home</a>
					</li>
					<li className="hover:underline underline-offset-4">
						<a href="#markets" className="">Markets</a>
					</li>
					<li className="hover:underline underline-offset-4">
						<a href="#about" className="">About Us</a>
					</li>
					<li className="hover:underline underline-offset-4">
						<a href="#socials" className="">Follow Us</a>
					</li>
				</ul>
			</nav>
			<div className="flex-1 flex justify-center items-center gap-4">
				<a href="#" className="w-6 h-6">
					{/* Twitter icon from tabler-icons.io */}
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
					</svg>
				</a>
				{/* Discord icon from tabler-icons.io */}
				<a href="#" className="w-6 h-6">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/>
						<path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
						<path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
						<path d="M7 16.5c3.5 1 6.5 1 10 0" />
					</svg>
				</a>
				{/* Instagram icon from tabler-icons.io */}
				<a href="#" className="w-6 h-6">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
						<path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
						<path d="M16.5 7.5l0 .01" />
					</svg>
				</a>
			</div>
		</header>
	);
}

export default Header;