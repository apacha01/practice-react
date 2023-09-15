import { Link } from 'react-router-dom';

function NavCard ({ title, subtitle, img, to = '#' }) {
	return (
		<Link to={to} className="nav-card">
			<div
				className="img"
				style={{backgroundImage: `url(${img})`}}
			>
				{title ?
					<h4 className="title">{title.toUpperCase()}</h4>
					: null
				}
			</div>
			<p className="subtitle">{subtitle}</p>
		</Link>
	);
}

export default NavCard;