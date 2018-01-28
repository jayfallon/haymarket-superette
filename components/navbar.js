import Link from 'next/link';

const Navbar = () => (
	<nav>
		<h4>Haymarket Superette</h4>
		<p className="presents">presents</p>
		<style jsx>{`
			nav {
				background-color: #ffffff;
				display: flex;
				flex-direction: column;
				align-items: center;
			}
			h4 {
				margin: 12px 0 10px;
				font-family: 'gineso', sans-serif;
				font-size: 1.6rem;
				text-transform: uppercase;
			}
			p.presents {
				margin: 0;
				font-family: 'hamster', sans-serif;
				font-size: 24px;
			}
		`}</style>
	</nav>
);

export default Navbar;
