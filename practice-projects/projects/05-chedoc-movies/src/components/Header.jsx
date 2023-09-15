function Header ({ subtitle }) {
	return (
		<header className="header">
			<div className="upper-header">
				<h2>DEMO Streaming</h2>
				<div className="login-container">
					<button className="login-btn">Log in</button>
					<button className="trial-btn">Start your free trial</button>
				</div>
			</div>
			<div className="lower-header">
				<h2>Popular {subtitle}</h2>
			</div>
		</header>
	);
}

export default Header;