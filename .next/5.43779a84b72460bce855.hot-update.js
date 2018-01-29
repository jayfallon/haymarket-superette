webpackHotUpdate(5,{

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = __webpack_require__(391);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(189);

var _head2 = _interopRequireDefault(_head);

var _navbar = __webpack_require__(413);

var _navbar2 = _interopRequireDefault(_navbar);

var _footer = __webpack_require__(398);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jayfallon/Development/next/haymarket-btc-2/components/layout.js';


var Layout = function Layout(props) {
	return _react2.default.createElement('div', {
		className: 'jsx-756793230' + ' ' + 'wrapper',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}, _react2.default.createElement('head', {
		className: 'jsx-756793230',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, _react2.default.createElement('title', {
		className: 'jsx-756793230',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, 'Haymarket Bitcoin Superette'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.buttflare.com/ajax/libs/normalize/7.0.0/normalize.min.css', className: 'jsx-756793230',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://use.typekit.net/rjj6clr.css', className: 'jsx-756793230',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', className: 'jsx-756793230',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}), _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png', className: 'jsx-756793230',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}), _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png', className: 'jsx-756793230',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}), _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png', className: 'jsx-756793230',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}), _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png', className: 'jsx-756793230',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}), _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png', className: 'jsx-756793230',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 16
		}
	}), _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png', className: 'jsx-756793230',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 17
		}
	}), _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png', className: 'jsx-756793230',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 18
		}
	}), _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png', className: 'jsx-756793230',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 19
		}
	}), _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png', className: 'jsx-756793230',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	}), _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png', className: 'jsx-756793230',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 21
		}
	}), _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png', className: 'jsx-756793230',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 22
		}
	}), _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png', className: 'jsx-756793230',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 23
		}
	}), _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png', className: 'jsx-756793230',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 24
		}
	}), _react2.default.createElement('link', { rel: 'manifest', href: '/manifest.json', className: 'jsx-756793230',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 25
		}
	}), _react2.default.createElement('meta', { name: 'msapplication-TileColor', content: '#ffffff', className: 'jsx-756793230',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 26
		}
	}), _react2.default.createElement('meta', { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png', className: 'jsx-756793230',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 27
		}
	}), _react2.default.createElement('meta', { name: 'theme-color', content: '#ffffff', className: 'jsx-756793230',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 28
		}
	})), _react2.default.createElement(_navbar2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 30
		}
	}), props.children, _react2.default.createElement(_style2.default, {
		styleId: '756793230',
		css: '@font-face{font-family:Hamster;src:url(\'static/Hamster.otf\') format(\'opentype\');}@font-face{font-family:VTCSuperMarketSaleTall;src:url(\'static/VTCSuperMarketSaleTall.ttf\') format(\'truetype\');}html{height:100%;}body{background-color:#8cbcee;background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 56 28\' width=\'56\' height=\'28\'%3E%3Cpath fill=\'%2363a0e1\' fill-opacity=\'0.4\' d=\'M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z\'%3E%3C/path%3E%3C/svg%3E");margin:0;height:100%;font-size:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}body>div,body>div>div,body>div>div>div{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}.wrapper{background-color:#ffffff;display:grid;grid-template-columns:1fr;}@media only screen and (min-device-width:375px) and (max-device-width:667px) and (-webkit-min-device-pixel-ratio:2){body{background:#ffffff url();padding:0 12px;}}@media only screen and (min-device-width:414px) and (max-device-width:736px) and (-webkit-min-device-pixel-ratio:3){body{background:#ffffff url();padding:0 12px;}}@media only screen and (min-device-width:768px) and (max-device-width:1024px) and (-webkit-min-device-pixel-ratio:2){body{margin:0;}.wrapper{margin:0 auto;width:750px;}}@media screen and (min-device-width:1200px) and (-webkit-min-device-pixel-ratio:1){.wrapper{margin:0 auto;width:650px;grid-template-rows:90px auto auto auto;}}@media screen and (min-device-width:1200px) and (-webkit-min-device-pixel-ratio:2) and (min-resolution:192dpi){.wrapper{margin:0 auto;width:650px;grid-template-rows:repeat(4,auto);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCcUIsQUFHeUIsQUFJZSxBQUl2QixBQUdhLEFBWVosQUFJWSxBQU1DLEFBTUEsQUFNaEIsQUFHSyxBQU1BLEFBUUEsU0FoQmYsR0FyQ0QsRUF3Q2MsQUFNQSxBQVFBLE1BOURvQyxLQVdtakQsQUFnQnZsRCxBQU1HLEFBTUEsQ0FVaEIsQUFNd0MsQUFRSixTQTNENEIsR0F3QnRDLEVBTTFCLEFBTUEsb0JBd0JBLElBbkNELENBMkJDLElBdkRELEtBc0JxQix5QkFsQnJCLHdFQW1CQSxrOUNBWlUsU0FDRyxZQUNHLGVBQ0YsMEVBQ1UsbUdBQ0gsaUdBQ3JCIiwiZmlsZSI6ImNvbXBvbmVudHMvbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYXlmYWxsb24vRGV2ZWxvcG1lbnQvbmV4dC9oYXltYXJrZXQtYnRjLTIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL25hdmJhcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJztcblxuY29uc3QgTGF5b3V0ID0gcHJvcHMgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cblx0XHQ8aGVhZD5cblx0XHRcdDx0aXRsZT5IYXltYXJrZXQgQml0Y29pbiBTdXBlcmV0dGU8L3RpdGxlPlxuXHRcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmJ1dHRmbGFyZS5jb20vYWpheC9saWJzL25vcm1hbGl6ZS83LjAuMC9ub3JtYWxpemUubWluLmNzc1wiIC8+XG5cdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L3JqajZjbHIuY3NzXCIgLz5cblx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG5cdFx0XHQ8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI1N3g1N1wiIGhyZWY9XCIvYXBwbGUtaWNvbi01N3g1Ny5wbmdcIiAvPlxuXHRcdFx0PGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiNjB4NjBcIiBocmVmPVwiL2FwcGxlLWljb24tNjB4NjAucG5nXCIgLz5cblx0XHRcdDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjcyeDcyXCIgaHJlZj1cIi9hcHBsZS1pY29uLTcyeDcyLnBuZ1wiIC8+XG5cdFx0XHQ8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI3Nng3NlwiIGhyZWY9XCIvYXBwbGUtaWNvbi03Nng3Ni5wbmdcIiAvPlxuXHRcdFx0PGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTE0eDExNFwiIGhyZWY9XCIvYXBwbGUtaWNvbi0xMTR4MTE0LnBuZ1wiIC8+XG5cdFx0XHQ8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxMjB4MTIwXCIgaHJlZj1cIi9hcHBsZS1pY29uLTEyMHgxMjAucG5nXCIgLz5cblx0XHRcdDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE0NHgxNDRcIiBocmVmPVwiL2FwcGxlLWljb24tMTQ0eDE0NC5wbmdcIiAvPlxuXHRcdFx0PGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTUyeDE1MlwiIGhyZWY9XCIvYXBwbGUtaWNvbi0xNTJ4MTUyLnBuZ1wiIC8+XG5cdFx0XHQ8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxODB4MTgwXCIgaHJlZj1cIi9hcHBsZS1pY29uLTE4MHgxODAucG5nXCIgLz5cblx0XHRcdDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxOTJ4MTkyXCIgaHJlZj1cIi9hbmRyb2lkLWljb24tMTkyeDE5Mi5wbmdcIiAvPlxuXHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjMyeDMyXCIgaHJlZj1cIi9mYXZpY29uLTMyeDMyLnBuZ1wiIC8+XG5cdFx0XHQ8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiOTZ4OTZcIiBocmVmPVwiL2Zhdmljb24tOTZ4OTYucG5nXCIgLz5cblx0XHRcdDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCIvZmF2aWNvbi0xNngxNi5wbmdcIiAvPlxuXHRcdFx0PGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL21hbmlmZXN0Lmpzb25cIiAvPlxuXHRcdFx0PG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiNmZmZmZmZcIiAvPlxuXHRcdFx0PG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUltYWdlXCIgY29udGVudD1cIi9tcy1pY29uLTE0NHgxNDQucG5nXCIgLz5cblx0XHRcdDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjZmZmZmZmXCIgLz5cblx0XHQ8L2hlYWQ+XG5cdFx0PE5hdmJhciAvPlxuXHRcdHtwcm9wcy5jaGlsZHJlbn1cblx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0QGZvbnQtZmFjZSB7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBIYW1zdGVyO1xuXHRcdFx0XHRzcmM6IHVybCgnc3RhdGljL0hhbXN0ZXIub3RmJykgZm9ybWF0KCdvcGVudHlwZScpO1xuXHRcdFx0fVxuXHRcdFx0QGZvbnQtZmFjZSB7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBWVENTdXBlck1hcmtldFNhbGVUYWxsO1xuXHRcdFx0XHRzcmM6IHVybCgnc3RhdGljL1ZUQ1N1cGVyTWFya2V0U2FsZVRhbGwudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xuXHRcdFx0fVxuXHRcdFx0aHRtbCB7XG5cdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdH1cblx0XHRcdGJvZHkge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjOGNiY2VlO1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU2IDI4JyB3aWR0aD0nNTYnIGhlaWdodD0nMjgnJTNFJTNDcGF0aCBmaWxsPSclMjM2M2EwZTEnIGZpbGwtb3BhY2l0eT0nMC40JyBkPSdNNTYgMjZ2MmgtNy43NWMyLjMtMS4yNyA0Ljk0LTIgNy43NS0yem0tMjYgMmEyIDIgMCAxIDAtNCAwaC00LjA5QTI1Ljk4IDI1Ljk4IDAgMCAwIDAgMTZ2LTJjLjY3IDAgMS4zNC4wMiAyIC4wN1YxNGEyIDIgMCAwIDAtMi0ydi0yYTQgNCAwIDAgMSAzLjk4IDMuNiAyOC4wOSAyOC4wOSAwIDAgMSAyLjgtMy44NkE4IDggMCAwIDAgMCA2VjRhOS45OSA5Ljk5IDAgMCAxIDguMTcgNC4yM2MuOTQtLjk1IDEuOTYtMS44MyAzLjAzLTIuNjNBMTMuOTggMTMuOTggMCAwIDAgMCAwaDcuNzVjMiAxLjEgMy43MyAyLjYzIDUuMSA0LjQ1IDEuMTItLjcyIDIuMy0xLjM3IDMuNTMtMS45M0EyMC4xIDIwLjEgMCAwIDAgMTQuMjggMGgyLjdjLjQ1LjU2Ljg4IDEuMTQgMS4yOSAxLjc0IDEuMy0uNDggMi42My0uODcgNC0xLjE1LS4xMS0uMi0uMjMtLjQtLjM2LS41OUgyNnYuMDdhMjguNCAyOC40IDAgMCAxIDQgMFYwaDQuMDlsLS4zNy41OWMxLjM4LjI4IDIuNzIuNjcgNC4wMSAxLjE1LjQtLjYuODQtMS4xOCAxLjMtMS43NGgyLjY5YTIwLjEgMjAuMSAwIDAgMC0yLjEgMi41MmMxLjIzLjU2IDIuNDEgMS4yIDMuNTQgMS45M0ExNi4wOCAxNi4wOCAwIDAgMSA0OC4yNSAwSDU2Yy00LjU4IDAtOC42NSAyLjItMTEuMiA1LjYgMS4wNy44IDIuMDkgMS42OCAzLjAzIDIuNjNBOS45OSA5Ljk5IDAgMCAxIDU2IDR2MmE4IDggMCAwIDAtNi43NyAzLjc0YzEuMDMgMS4yIDEuOTcgMi41IDIuNzkgMy44NkE0IDQgMCAwIDEgNTYgMTB2MmEyIDIgMCAwIDAtMiAyLjA3IDI4LjQgMjguNCAwIDAgMSAyLS4wN3YyYy05LjIgMC0xNy4zIDQuNzgtMjEuOTEgMTJIMzB6TTcuNzUgMjhIMHYtMmMyLjgxIDAgNS40Ni43MyA3Ljc1IDJ6TTU2IDIwdjJjLTUuNiAwLTEwLjY1IDIuMy0xNC4yOCA2aC0yLjdjNC4wNC00Ljg5IDEwLjE1LTggMTYuOTgtOHptLTM5LjAzIDhoLTIuNjlDMTAuNjUgMjQuMyA1LjYgMjIgMCAyMnYtMmM2LjgzIDAgMTIuOTQgMy4xMSAxNi45NyA4em0xNS4wMS0uNGEyOC4wOSAyOC4wOSAwIDAgMSAyLjgtMy44NiA4IDggMCAwIDAtMTMuNTUgMGMxLjAzIDEuMiAxLjk3IDIuNSAyLjc5IDMuODZhNCA0IDAgMCAxIDcuOTYgMHptMTQuMjktMTEuODZjMS4zLS40OCAyLjYzLS44NyA0LTEuMTVhMjUuOTkgMjUuOTkgMCAwIDAtNDQuNTUgMGMxLjM4LjI4IDIuNzIuNjcgNC4wMSAxLjE1YTIxLjk4IDIxLjk4IDAgMCAxIDM2LjU0IDB6bS01LjQzIDIuNzFjMS4xMy0uNzIgMi4zLTEuMzcgMy41NC0xLjkzYTE5Ljk4IDE5Ljk4IDAgMCAwLTMyLjc2IDBjMS4yMy41NiAyLjQxIDEuMiAzLjU0IDEuOTNhMTUuOTggMTUuOTggMCAwIDEgMjUuNjggMHptLTQuNjcgMy43OGMuOTQtLjk1IDEuOTYtMS44MyAzLjAzLTIuNjNhMTMuOTggMTMuOTggMCAwIDAtMjIuNCAwYzEuMDcuOCAyLjA5IDEuNjggMy4wMyAyLjYzYTkuOTkgOS45OSAwIDAgMSAxNi4zNCAweiclM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcIik7XG5cdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRhbGlnbi1pdGVtczogc3RyZXRjaDtcblx0XHRcdH1cblx0XHRcdGJvZHkgPiBkaXYsXG5cdFx0XHRib2R5ID4gZGl2ID4gZGl2LFxuXHRcdFx0Ym9keSA+IGRpdiA+IGRpdiA+IGRpdiB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXHRcdFx0fVxuXHRcdFx0LndyYXBwZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXHRcdFx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcblx0XHRcdH1cblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDY2N3B4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xuXHRcdFx0XHRib2R5IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmZmZmIHVybCgpO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDAgMTJweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDE0cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNzM2cHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XG5cdFx0XHRcdGJvZHkge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmZmZmYgdXJsKCk7XG5cdFx0XHRcdFx0cGFkZGluZzogMCAxMnB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG5cdFx0XHRcdGJvZHkge1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0fVxuXHRcdFx0XHQud3JhcHBlciB7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdFx0d2lkdGg6IDc1MHB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMTIwMHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSkge1xuXHRcdFx0XHQud3JhcHBlciB7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdFx0d2lkdGg6IDY1MHB4O1xuXHRcdFx0XHRcdGdyaWQtdGVtcGxhdGUtcm93czogOTBweCBhdXRvIGF1dG8gYXV0bztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMTIwMHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSB7XG5cdFx0XHRcdC53cmFwcGVyIHtcblx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHR3aWR0aDogNjUwcHg7XG5cdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgYXV0byk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRgfTwvc3R5bGU+XG5cdDwvZGl2PlxuKTtcblxuTGF5b3V0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuY29pbmRlc2suY29tL3YxL2JwaS9jdXJyZW50cHJpY2UuanNvbicpO1xuXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuXHRyZXR1cm4ge1xuXHRcdHRpbWU6IGRhdGEudGltZS51cGRhdGVkLFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl19 */\n/*@ sourceURL=components/layout.js */'
	}));
};

Layout.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
	var res, data;
	return _regenerator2.default.wrap(function _callee$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return fetch('https://api.coindesk.com/v1/bpi/currentprice.json');

				case 2:
					res = _context.sent;
					_context.next = 5;
					return res.json();

				case 5:
					data = _context.sent;
					return _context.abrupt('return', {
						time: data.time.updated
					});

				case 7:
				case 'end':
					return _context.stop();
			}
		}
	}, _callee, this);
}));

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJOYXZiYXIiLCJGb290ZXIiLCJMYXlvdXQiLCJwcm9wcyIsImNoaWxkcmVuIiwiZ2V0SW5pdGlhbFByb3BzIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSIsInRpbWUiLCJ1cGRhdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVk7Ozs7Ozs7OztBQUVuQixJQUFNLFNBQVMsU0FBVCxBQUFTLGNBQUE7d0JBQ2QsY0FBQTtxQ0FBQSxBQUFlOzthQUFmO2VBQUEsQUFDQztBQUREO0FBQUEsRUFBQSxrQkFDQyxjQUFBO2FBQUE7O2FBQUE7ZUFBQSxBQUNDO0FBREQ7QUFBQSxvQkFDQyxjQUFBO2FBQUE7O2FBQUE7ZUFBQTtBQUFBO0FBQUEsSUFERCxBQUNDLEFBQ0Esd0VBQU0sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEIsc0ZBQTVCOzthQUFBO2VBRkQsQUFFQyxBQUNBO0FBREE7NkNBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEIsa0RBQTVCOzthQUFBO2VBSEQsQUFHQyxBQUNBO0FBREE7NkNBQ00sTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEIsa0RBQTlCOzthQUFBO2VBSkQsQUFJQyxBQUNBO0FBREE7NkNBQ00sS0FBTixBQUFVLG9CQUFtQixPQUE3QixBQUFtQyxTQUFRLE1BQTNDLEFBQWdELG9DQUFoRDs7YUFBQTtlQUxELEFBS0MsQUFDQTtBQURBOzZDQUNNLEtBQU4sQUFBVSxvQkFBbUIsT0FBN0IsQUFBbUMsU0FBUSxNQUEzQyxBQUFnRCxvQ0FBaEQ7O2FBQUE7ZUFORCxBQU1DLEFBQ0E7QUFEQTs2Q0FDTSxLQUFOLEFBQVUsb0JBQW1CLE9BQTdCLEFBQW1DLFNBQVEsTUFBM0MsQUFBZ0Qsb0NBQWhEOzthQUFBO2VBUEQsQUFPQyxBQUNBO0FBREE7NkNBQ00sS0FBTixBQUFVLG9CQUFtQixPQUE3QixBQUFtQyxTQUFRLE1BQTNDLEFBQWdELG9DQUFoRDs7YUFBQTtlQVJELEFBUUMsQUFDQTtBQURBOzZDQUNNLEtBQU4sQUFBVSxvQkFBbUIsT0FBN0IsQUFBbUMsV0FBVSxNQUE3QyxBQUFrRCxzQ0FBbEQ7O2FBQUE7ZUFURCxBQVNDLEFBQ0E7QUFEQTs2Q0FDTSxLQUFOLEFBQVUsb0JBQW1CLE9BQTdCLEFBQW1DLFdBQVUsTUFBN0MsQUFBa0Qsc0NBQWxEOzthQUFBO2VBVkQsQUFVQyxBQUNBO0FBREE7NkNBQ00sS0FBTixBQUFVLG9CQUFtQixPQUE3QixBQUFtQyxXQUFVLE1BQTdDLEFBQWtELHNDQUFsRDs7YUFBQTtlQVhELEFBV0MsQUFDQTtBQURBOzZDQUNNLEtBQU4sQUFBVSxvQkFBbUIsT0FBN0IsQUFBbUMsV0FBVSxNQUE3QyxBQUFrRCxzQ0FBbEQ7O2FBQUE7ZUFaRCxBQVlDLEFBQ0E7QUFEQTs2Q0FDTSxLQUFOLEFBQVUsb0JBQW1CLE9BQTdCLEFBQW1DLFdBQVUsTUFBN0MsQUFBa0Qsc0NBQWxEOzthQUFBO2VBYkQsQUFhQyxBQUNBO0FBREE7NkNBQ00sS0FBTixBQUFVLFFBQU8sTUFBakIsQUFBc0IsYUFBWSxPQUFsQyxBQUF3QyxXQUFVLE1BQWxELEFBQXVELHdDQUF2RDs7YUFBQTtlQWRELEFBY0MsQUFDQTtBQURBOzZDQUNNLEtBQU4sQUFBVSxRQUFPLE1BQWpCLEFBQXNCLGFBQVksT0FBbEMsQUFBd0MsU0FBUSxNQUFoRCxBQUFxRCxpQ0FBckQ7O2FBQUE7ZUFmRCxBQWVDLEFBQ0E7QUFEQTs2Q0FDTSxLQUFOLEFBQVUsUUFBTyxNQUFqQixBQUFzQixhQUFZLE9BQWxDLEFBQXdDLFNBQVEsTUFBaEQsQUFBcUQsaUNBQXJEOzthQUFBO2VBaEJELEFBZ0JDLEFBQ0E7QUFEQTs2Q0FDTSxLQUFOLEFBQVUsUUFBTyxNQUFqQixBQUFzQixhQUFZLE9BQWxDLEFBQXdDLFNBQVEsTUFBaEQsQUFBcUQsaUNBQXJEOzthQUFBO2VBakJELEFBaUJDLEFBQ0E7QUFEQTs2Q0FDTSxLQUFOLEFBQVUsWUFBVyxNQUFyQixBQUEwQiw2QkFBMUI7O2FBQUE7ZUFsQkQsQUFrQkMsQUFDQTtBQURBOzZDQUNNLE1BQU4sQUFBVywyQkFBMEIsU0FBckMsQUFBNkMsc0JBQTdDOzthQUFBO2VBbkJELEFBbUJDLEFBQ0E7QUFEQTs2Q0FDTSxNQUFOLEFBQVcsMkJBQTBCLFNBQXJDLEFBQTZDLG1DQUE3Qzs7YUFBQTtlQXBCRCxBQW9CQyxBQUNBO0FBREE7NkNBQ00sTUFBTixBQUFXLGVBQWMsU0FBekIsQUFBaUMsc0JBQWpDOzthQUFBO2VBdEJGLEFBQ0MsQUFxQkMsQUFFRDtBQUZDO3NCQUVELEFBQUM7O2FBQUQ7ZUF4QkQsQUF3QkMsQUFDQztBQUREO0FBQUEsV0F4QkQsQUF5QlE7V0F6QlI7T0FEYyxBQUNkO0FBQUE7QUFERDs7QUFvR0EsT0FBQSxBQUFPLDJGQUFrQixtQkFBQTtVQUFBOytEQUFBO1lBQUE7b0NBQUE7U0FBQTtxQkFBQTtZQUNOLE1BRE0sQUFDTixBQUFNOztTQUFsQjtBQURrQixvQkFBQTtxQkFBQTtZQUVMLElBRkssQUFFTCxBQUFJOztTQUFqQjtBQUZrQixxQkFBQTs7WUFLakIsS0FBQSxBQUFLLEtBTFksQUFJakIsQUFDVTtBQURWLEFBQ047O1NBTHVCO1NBQUE7cUJBQUE7O0FBQUE7YUFBQTtBQUF6QixBQVNBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamF5ZmFsbG9uL0RldmVsb3BtZW50L25leHQvaGF5bWFya2V0LWJ0Yy0yIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/jayfallon/Development/next/haymarket-btc-2/components/layout.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jayfallon/Development/next/haymarket-btc-2/components/layout.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS40Mzc3OWE4NGI3MjQ2MGJjZTg1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQuanM/MTcyODljOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL25hdmJhcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJztcblxuY29uc3QgTGF5b3V0ID0gcHJvcHMgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cblx0XHQ8aGVhZD5cblx0XHRcdDx0aXRsZT5IYXltYXJrZXQgQml0Y29pbiBTdXBlcmV0dGU8L3RpdGxlPlxuXHRcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmJ1dHRmbGFyZS5jb20vYWpheC9saWJzL25vcm1hbGl6ZS83LjAuMC9ub3JtYWxpemUubWluLmNzc1wiIC8+XG5cdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L3JqajZjbHIuY3NzXCIgLz5cblx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG5cdFx0XHQ8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI1N3g1N1wiIGhyZWY9XCIvYXBwbGUtaWNvbi01N3g1Ny5wbmdcIiAvPlxuXHRcdFx0PGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiNjB4NjBcIiBocmVmPVwiL2FwcGxlLWljb24tNjB4NjAucG5nXCIgLz5cblx0XHRcdDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjcyeDcyXCIgaHJlZj1cIi9hcHBsZS1pY29uLTcyeDcyLnBuZ1wiIC8+XG5cdFx0XHQ8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI3Nng3NlwiIGhyZWY9XCIvYXBwbGUtaWNvbi03Nng3Ni5wbmdcIiAvPlxuXHRcdFx0PGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTE0eDExNFwiIGhyZWY9XCIvYXBwbGUtaWNvbi0xMTR4MTE0LnBuZ1wiIC8+XG5cdFx0XHQ8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxMjB4MTIwXCIgaHJlZj1cIi9hcHBsZS1pY29uLTEyMHgxMjAucG5nXCIgLz5cblx0XHRcdDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE0NHgxNDRcIiBocmVmPVwiL2FwcGxlLWljb24tMTQ0eDE0NC5wbmdcIiAvPlxuXHRcdFx0PGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTUyeDE1MlwiIGhyZWY9XCIvYXBwbGUtaWNvbi0xNTJ4MTUyLnBuZ1wiIC8+XG5cdFx0XHQ8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxODB4MTgwXCIgaHJlZj1cIi9hcHBsZS1pY29uLTE4MHgxODAucG5nXCIgLz5cblx0XHRcdDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxOTJ4MTkyXCIgaHJlZj1cIi9hbmRyb2lkLWljb24tMTkyeDE5Mi5wbmdcIiAvPlxuXHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjMyeDMyXCIgaHJlZj1cIi9mYXZpY29uLTMyeDMyLnBuZ1wiIC8+XG5cdFx0XHQ8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiOTZ4OTZcIiBocmVmPVwiL2Zhdmljb24tOTZ4OTYucG5nXCIgLz5cblx0XHRcdDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCIvZmF2aWNvbi0xNngxNi5wbmdcIiAvPlxuXHRcdFx0PGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL21hbmlmZXN0Lmpzb25cIiAvPlxuXHRcdFx0PG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiNmZmZmZmZcIiAvPlxuXHRcdFx0PG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUltYWdlXCIgY29udGVudD1cIi9tcy1pY29uLTE0NHgxNDQucG5nXCIgLz5cblx0XHRcdDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjZmZmZmZmXCIgLz5cblx0XHQ8L2hlYWQ+XG5cdFx0PE5hdmJhciAvPlxuXHRcdHtwcm9wcy5jaGlsZHJlbn1cblx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0QGZvbnQtZmFjZSB7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBIYW1zdGVyO1xuXHRcdFx0XHRzcmM6IHVybCgnc3RhdGljL0hhbXN0ZXIub3RmJykgZm9ybWF0KCdvcGVudHlwZScpO1xuXHRcdFx0fVxuXHRcdFx0QGZvbnQtZmFjZSB7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBWVENTdXBlck1hcmtldFNhbGVUYWxsO1xuXHRcdFx0XHRzcmM6IHVybCgnc3RhdGljL1ZUQ1N1cGVyTWFya2V0U2FsZVRhbGwudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xuXHRcdFx0fVxuXHRcdFx0aHRtbCB7XG5cdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdH1cblx0XHRcdGJvZHkge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjOGNiY2VlO1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU2IDI4JyB3aWR0aD0nNTYnIGhlaWdodD0nMjgnJTNFJTNDcGF0aCBmaWxsPSclMjM2M2EwZTEnIGZpbGwtb3BhY2l0eT0nMC40JyBkPSdNNTYgMjZ2MmgtNy43NWMyLjMtMS4yNyA0Ljk0LTIgNy43NS0yem0tMjYgMmEyIDIgMCAxIDAtNCAwaC00LjA5QTI1Ljk4IDI1Ljk4IDAgMCAwIDAgMTZ2LTJjLjY3IDAgMS4zNC4wMiAyIC4wN1YxNGEyIDIgMCAwIDAtMi0ydi0yYTQgNCAwIDAgMSAzLjk4IDMuNiAyOC4wOSAyOC4wOSAwIDAgMSAyLjgtMy44NkE4IDggMCAwIDAgMCA2VjRhOS45OSA5Ljk5IDAgMCAxIDguMTcgNC4yM2MuOTQtLjk1IDEuOTYtMS44MyAzLjAzLTIuNjNBMTMuOTggMTMuOTggMCAwIDAgMCAwaDcuNzVjMiAxLjEgMy43MyAyLjYzIDUuMSA0LjQ1IDEuMTItLjcyIDIuMy0xLjM3IDMuNTMtMS45M0EyMC4xIDIwLjEgMCAwIDAgMTQuMjggMGgyLjdjLjQ1LjU2Ljg4IDEuMTQgMS4yOSAxLjc0IDEuMy0uNDggMi42My0uODcgNC0xLjE1LS4xMS0uMi0uMjMtLjQtLjM2LS41OUgyNnYuMDdhMjguNCAyOC40IDAgMCAxIDQgMFYwaDQuMDlsLS4zNy41OWMxLjM4LjI4IDIuNzIuNjcgNC4wMSAxLjE1LjQtLjYuODQtMS4xOCAxLjMtMS43NGgyLjY5YTIwLjEgMjAuMSAwIDAgMC0yLjEgMi41MmMxLjIzLjU2IDIuNDEgMS4yIDMuNTQgMS45M0ExNi4wOCAxNi4wOCAwIDAgMSA0OC4yNSAwSDU2Yy00LjU4IDAtOC42NSAyLjItMTEuMiA1LjYgMS4wNy44IDIuMDkgMS42OCAzLjAzIDIuNjNBOS45OSA5Ljk5IDAgMCAxIDU2IDR2MmE4IDggMCAwIDAtNi43NyAzLjc0YzEuMDMgMS4yIDEuOTcgMi41IDIuNzkgMy44NkE0IDQgMCAwIDEgNTYgMTB2MmEyIDIgMCAwIDAtMiAyLjA3IDI4LjQgMjguNCAwIDAgMSAyLS4wN3YyYy05LjIgMC0xNy4zIDQuNzgtMjEuOTEgMTJIMzB6TTcuNzUgMjhIMHYtMmMyLjgxIDAgNS40Ni43MyA3Ljc1IDJ6TTU2IDIwdjJjLTUuNiAwLTEwLjY1IDIuMy0xNC4yOCA2aC0yLjdjNC4wNC00Ljg5IDEwLjE1LTggMTYuOTgtOHptLTM5LjAzIDhoLTIuNjlDMTAuNjUgMjQuMyA1LjYgMjIgMCAyMnYtMmM2LjgzIDAgMTIuOTQgMy4xMSAxNi45NyA4em0xNS4wMS0uNGEyOC4wOSAyOC4wOSAwIDAgMSAyLjgtMy44NiA4IDggMCAwIDAtMTMuNTUgMGMxLjAzIDEuMiAxLjk3IDIuNSAyLjc5IDMuODZhNCA0IDAgMCAxIDcuOTYgMHptMTQuMjktMTEuODZjMS4zLS40OCAyLjYzLS44NyA0LTEuMTVhMjUuOTkgMjUuOTkgMCAwIDAtNDQuNTUgMGMxLjM4LjI4IDIuNzIuNjcgNC4wMSAxLjE1YTIxLjk4IDIxLjk4IDAgMCAxIDM2LjU0IDB6bS01LjQzIDIuNzFjMS4xMy0uNzIgMi4zLTEuMzcgMy41NC0xLjkzYTE5Ljk4IDE5Ljk4IDAgMCAwLTMyLjc2IDBjMS4yMy41NiAyLjQxIDEuMiAzLjU0IDEuOTNhMTUuOTggMTUuOTggMCAwIDEgMjUuNjggMHptLTQuNjcgMy43OGMuOTQtLjk1IDEuOTYtMS44MyAzLjAzLTIuNjNhMTMuOTggMTMuOTggMCAwIDAtMjIuNCAwYzEuMDcuOCAyLjA5IDEuNjggMy4wMyAyLjYzYTkuOTkgOS45OSAwIDAgMSAxNi4zNCAweiclM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcIik7XG5cdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRhbGlnbi1pdGVtczogc3RyZXRjaDtcblx0XHRcdH1cblx0XHRcdGJvZHkgPiBkaXYsXG5cdFx0XHRib2R5ID4gZGl2ID4gZGl2LFxuXHRcdFx0Ym9keSA+IGRpdiA+IGRpdiA+IGRpdiB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXHRcdFx0fVxuXHRcdFx0LndyYXBwZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXHRcdFx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcblx0XHRcdH1cblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDY2N3B4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xuXHRcdFx0XHRib2R5IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmZmZmIHVybCgpO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDAgMTJweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDE0cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNzM2cHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XG5cdFx0XHRcdGJvZHkge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmZmZmYgdXJsKCk7XG5cdFx0XHRcdFx0cGFkZGluZzogMCAxMnB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG5cdFx0XHRcdGJvZHkge1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0fVxuXHRcdFx0XHQud3JhcHBlciB7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdFx0d2lkdGg6IDc1MHB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMTIwMHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSkge1xuXHRcdFx0XHQud3JhcHBlciB7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdFx0d2lkdGg6IDY1MHB4O1xuXHRcdFx0XHRcdGdyaWQtdGVtcGxhdGUtcm93czogOTBweCBhdXRvIGF1dG8gYXV0bztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMTIwMHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSB7XG5cdFx0XHRcdC53cmFwcGVyIHtcblx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHR3aWR0aDogNjUwcHg7XG5cdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgYXV0byk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRgfTwvc3R5bGU+XG5cdDwvZGl2PlxuKTtcblxuTGF5b3V0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuY29pbmRlc2suY29tL3YxL2JwaS9jdXJyZW50cHJpY2UuanNvbicpO1xuXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuXHRyZXR1cm4ge1xuXHRcdHRpbWU6IGRhdGEudGltZS51cGRhdGVkLFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUF4QkE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQW1HQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFGQTs7QUFLQTtBQUFBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFEQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9