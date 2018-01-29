'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jayfallon/Development/next/haymarket-btc-2/components/footer.js';


var Footer = function Footer(props) {
	return _react2.default.createElement('footer', {
		className: 'jsx-2592526832',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 4
		}
	}, _react2.default.createElement('div', {
		className: 'jsx-2592526832' + ' ' + 'current-prices',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}, '*Current prices as of: ', props.time, '.', _react2.default.createElement('br', {
		className: 'jsx-2592526832',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}), ' Powered by', ' ', _react2.default.createElement(_link2.default, { href: 'https://www.coindesk.com/price/', __source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, _react2.default.createElement('a', {
		className: 'jsx-2592526832',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, 'CoinDesk'))), _react2.default.createElement('div', {
		className: 'jsx-2592526832' + ' ' + 'copyright',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}, '\xA92018 -', ' ', _react2.default.createElement(_link2.default, { href: 'https://undenary.com', __source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, _react2.default.createElement('a', {
		className: 'jsx-2592526832',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}, 'Undenary Creative'))), _react2.default.createElement(_style2.default, {
		styleId: '2592526832',
		css: 'footer.jsx-2592526832{background-color:#ffffff;padding-bottom:24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.current-prices.jsx-2592526832{color:#4a4a4a;font-family:\'Hamster\',sdans-serif;font-size:1.867rem;text-align:center;}.copyright.jsx-2592526832{margin-top:24px;color:#8cbcee;font-family:\'VTCSuperMarketSaleTall\',sans-serif;font-size:1rem;}footer.jsx-2592526832 a.jsx-2592526832{color:#8cbcee;text-decoration:none;}@media only screen and (min-device-width:375px) and (max-device-width:667px) and (-webkit-min-device-pixel-ratio:2){.current-prices.jsx-2592526832{font-size:1.4rem;}}@media only screen and (min-device-width:414px) and (max-device-width:736px) and (-webkit-min-device-pixel-ratio:3){.current-prices.jsx-2592526832{font-size:1.4rem;}}@media only screen and (min-device-width:375px) and (max-device-width:812px) and (-webkit-min-device-pixel-ratio:3){.current-prices.jsx-2592526832{font-size:1.4rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCYyxBQUc4QixBQVFYLEFBTUUsQUFNRixBQUtJLEFBS0EsQUFLQSxjQTFCaUIsQUFZZCxFQU5QLENBV2QsQUFLQSxBQUtBLFFBbkNvQixLQWU2QixLQU1sRCxVQXBCYyxHQVFNLG1CQUNELFdBTUgsT0FMaEIsUUFNQSwwQkFmdUIsOEVBQ0csaUdBQ04sNkZBQ3BCIiwiZmlsZSI6ImNvbXBvbmVudHMvZm9vdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYXlmYWxsb24vRGV2ZWxvcG1lbnQvbmV4dC9oYXltYXJrZXQtYnRjLTIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBGb290ZXIgPSBwcm9wcyA9PiAoXG5cdDxmb290ZXI+XG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjdXJyZW50LXByaWNlc1wiPlxuXHRcdFx0KkN1cnJlbnQgcHJpY2VzIGFzIG9mOiB7cHJvcHMudGltZX0uPGJyIC8+IFBvd2VyZWQgYnl7JyAnfVxuXHRcdFx0PExpbmsgaHJlZj1cImh0dHBzOi8vd3d3LmNvaW5kZXNrLmNvbS9wcmljZS9cIj5cblx0XHRcdFx0PGE+Q29pbkRlc2s8L2E+XG5cdFx0XHQ8L0xpbms+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb3B5cmlnaHRcIj5cblx0XHRcdCZjb3B5OzIwMTggLXsnICd9XG5cdFx0XHQ8TGluayBocmVmPVwiaHR0cHM6Ly91bmRlbmFyeS5jb21cIj5cblx0XHRcdFx0PGE+VW5kZW5hcnkgQ3JlYXRpdmU8L2E+XG5cdFx0XHQ8L0xpbms+XG5cdFx0PC9kaXY+XG5cdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0Zm9vdGVyIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblx0XHRcdFx0cGFkZGluZy1ib3R0b206IDI0cHg7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHR9XG5cdFx0XHQuY3VycmVudC1wcmljZXMge1xuXHRcdFx0XHRjb2xvcjogIzRhNGE0YTtcblx0XHRcdFx0Zm9udC1mYW1pbHk6ICdIYW1zdGVyJywgc2RhbnMtc2VyaWY7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMS44NjdyZW07XG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdH1cblx0XHRcdC5jb3B5cmlnaHQge1xuXHRcdFx0XHRtYXJnaW4tdG9wOiAyNHB4O1xuXHRcdFx0XHRjb2xvcjogIzhjYmNlZTtcblx0XHRcdFx0Zm9udC1mYW1pbHk6ICdWVENTdXBlck1hcmtldFNhbGVUYWxsJywgc2Fucy1zZXJpZjtcblx0XHRcdFx0Zm9udC1zaXplOiAxcmVtO1xuXHRcdFx0fVxuXHRcdFx0Zm9vdGVyIGEge1xuXHRcdFx0XHRjb2xvcjogIzhjYmNlZTtcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0fVxuXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNjY3cHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG5cdFx0XHRcdC5jdXJyZW50LXByaWNlcyB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxLjRyZW07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDczNnB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMykge1xuXHRcdFx0XHQuY3VycmVudC1wcmljZXMge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMS40cmVtO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA4MTJweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHtcblx0XHRcdFx0LmN1cnJlbnQtcHJpY2VzIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDEuNHJlbTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdGB9PC9zdHlsZT5cblx0PC9mb290ZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXX0= */\n/*@ sourceURL=components/footer.js */'
	}));
};

exports.default = Footer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9vdGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJGb290ZXIiLCJwcm9wcyIsInRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxTQUFTLFNBQVQsQUFBUyxjQUFBO3dCQUNkLGNBQUE7YUFBQTs7YUFBQTtlQUFBLEFBQ0M7QUFERDtBQUFBLEVBQUEsa0JBQ0MsY0FBQTtzQ0FBQSxBQUFlOzthQUFmO2VBQUE7QUFBQTtBQUFBLElBQ3lCLGlDQUR6QixBQUMrQixNQUFNO2FBQUE7O2FBQUE7ZUFEckMsQUFDcUM7QUFBQTtBQUFBLEtBQWtCLGVBRHZELEFBRUMscUJBQUEsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7YUFBWDtlQUFBLEFBQ0M7QUFERDtvQkFDQyxjQUFBO2FBQUE7O2FBQUE7ZUFBQTtBQUFBO0FBQUEsSUFKSCxBQUNDLEFBRUMsQUFDQyxBQUdGLCtCQUFBLGNBQUE7c0NBQUEsQUFBZTs7YUFBZjtlQUFBO0FBQUE7QUFBQSxJQUNjLGNBRGQsQUFFQyxxQkFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVzthQUFYO2VBQUEsQUFDQztBQUREO29CQUNDLGNBQUE7YUFBQTs7YUFBQTtlQUFBO0FBQUE7QUFBQSxJQVZILEFBT0MsQUFFQyxBQUNDO1dBVkg7T0FEYyxBQUNkO0FBQUE7QUFERCxBQTBEQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJmb290ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pheWZhbGxvbi9EZXZlbG9wbWVudC9uZXh0L2hheW1hcmtldC1idGMtMiJ9