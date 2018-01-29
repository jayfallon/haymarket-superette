import Link from 'next/link';
import Layout from '../components/layout';
import Fetch from 'isomorphic-unfetch';
import Prices from '../components/prices';
import Footer from '../components/footer';

const Index = props => (
	<Layout>
		<main>
			<h3 className="fresh">
				<span>Extra Fresh*</span>
			</h3>
			<h1>
				<span>"Bitcoin"</span>
				<span> Prices</span>
			</h1>
			<Prices bpi={props.bpi} />
		</main>
		<Footer time={props.time} />
		<style jsx>{`
			main {
				background-color: #ffffff;
				padding: 0 12px;
			}
			h3.fresh {
				background-image: url(/static/squiggly.svg);
				background-repeat: no-repeat;
				background-size: contain;
				background-position: center center;
				margin: 0;
				display: flex;
				justify-content: center;
			}

			h3.fresh span {
				font-family: 'swingdancer', sans-serif;
				font-size: 4rem;
				color: #ff0000;
			}
			h1 {
				margin: 36px 0 0;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
			h1 span {
				color: #341482;
				font-family: 'VTCSuperMarketSaleTall', sans-serif;
				font-size: 8rem;
				text-shadow: 8px 8px 0 #ffdd40;
				transform: rotate(-7deg);
			}

			@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
				h3.fresh span {
					font-size: 3rem;
				}
				h1 span {
					font-size: 6.2rem;
				}
			}

			@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
				h3.fresh span {
					font-size: 3.4rem;
				}
				h1 span {
					font-size: 6.667rem;
				}
			}
		`}</style>
	</Layout>
);

Index.getInitialProps = async function() {
	const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
	const data = await res.json();

	return {
		time: data.time.updated,
		bpi: data.bpi,
	};

	const resC = await fetch('https://api.coindesk.com/v1/bpi/currentprice/CNY.json');
	const dataC = await res.json();

	return {
		cpi: data.bpi,
	};
};

export default Index;
