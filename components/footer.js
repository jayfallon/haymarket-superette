import Link from 'next/link';

const Footer = props => (
	<footer>
		<div className="current-prices">*Current prices as of: {props.time}</div>
		<div className="copyright">
			&copy;2018 - <a href="https://undenary.com">Undenary Creative</a>
		</div>
		<style jsx>{`
			footer {
				background-color: #ffffff;
				padding-bottom: 24px;
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				align-items: center;
			}
			.current-prices {
				color: #4a4a4a;
				font-family: 'Hamster', sdans-serif;
				font-size: 1.867rem;
			}
			.copyright {
				margin-top: 24px;
				color: #8cbcee;
				font-family: 'VTCSuperMarketSaleTall', sans-serif;
				font-size: 1rem;
			}
			.copyright a {
				color: #8cbcee;
				text-decoration: none;
			}
			@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
				.current-prices {
					font-size: 1.4rem;
				}
			}
			@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
				.current-prices {
					font-size: 1.4rem;
				}
			}
			@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
				.current-prices {
					font-size: 1.4rem;
				}
			}
		`}</style>
	</footer>
);

export default Footer;
