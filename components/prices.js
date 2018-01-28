class Prices extends React.Component {
	render() {
		return (
			<div className="grid-wrapper">
				<div className="price-grid">
					<span className="key">USD:</span>
					<span className="value">
						<span>
							<sup>$</sup>
							{this.props.bpi.USD.rate}
						</span>
					</span>
					<span className="key">GBP:</span>
					<span className="value">
						<span>
							<sup>£</sup>
							{this.props.bpi.GBP.rate}
						</span>
					</span>
					<span className="key">EUR:</span>
					<span className="value">
						<span>
							<sup>€</sup>
							{this.props.bpi.EUR.rate}
						</span>
					</span>
				</div>
				<style jsx>{`
                    .grid-wrapper {
                        margin: 36px 0
                        display: flex;
                        justify-content: center;
                    }
                    .price-grid {
                        width: 100%;
                        color: #FF0000;
                        font-family: 'VTCSuperMarketSaleTall', sans-serif;
                        font-size: 4.667rem
                        display: grid;
                        grid-template-columns: auto auto;
                        
                        grid-gap: 24px;
                    }
                    .key {
                        text-align: right;
                        align-self: center;
                    }
                    .value {
                        
                        
                    }
                    .value sup {
                        font-family: "scriptorama-markdown-jf",sans-serif;
                        font-size: 3rem
                    }
                    .value span {
                        background-image: url(/static/twist.svg);
                        background-repeat: no-repeat;
                        background-size: contain;
                        background-position: center center;
                        align-self: center;
                    }
                    @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
                        .price-grid {
                            width: 90%;
                            font-size: 3.5rem;
                        }
                        .value sup {
                            font-size: 2rem;
                        }
                    }
                    @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
                        .price-grid {
                            width: 90%;
                            font-size: 3.5rem;
                        }
                        .value sup {
                            font-size: 2rem;
                        }
                    }
                `}</style>
			</div>
		);
	}
}

export default Prices;
