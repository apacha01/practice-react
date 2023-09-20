import FollowCard from './FollowCard';

function Follow () {
	return (
		<section id="socials" className="pt-28 w-full bg-dark-purple text-white flex flex-col items-center">
			<h1 className="text-5xl mb-5">Follow Us</h1>
			<h4 className="text-3xl opacity-80">Check our social media and don&apos;t miss a single update</h4>
			<div className="w-2/3 flex text-5xl gap-8 mt-8 flex-wrap justify-center">
				{/* Youtube */}
				<FollowCard legend="Subscribe to our YouTube channel">
					<svg className="aspect-square w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
						<path d="M10 9l5 3l-5 3z" />
					</svg>
				</FollowCard>
				{/* Twitter */}
				<FollowCard legend="Follow us on Twitter">
					<svg className="aspect-square w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
					</svg>
				</FollowCard>
				{/* Discord */}
				<FollowCard legend="Join our Discord">
					<svg className="aspect-square w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
						<path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
						<path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
						<path d="M7 16.5c3.5 1 6.5 1 10 0" />
					</svg>
				</FollowCard>
				{/* Facebook */}
				<FollowCard legend="Follow us on Facebook">
					<svg className="aspect-square w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
					</svg>
				</FollowCard>
			</div>
		</section>
	);
}

export default Follow;