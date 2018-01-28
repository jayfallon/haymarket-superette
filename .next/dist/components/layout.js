'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _navbar = require('./navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _footer = require('./footer');

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
	}), _react2.default.createElement('link', { rel: 'icon', href: '/static/favicon.png', className: 'jsx-756793230',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', className: 'jsx-756793230',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	})), _react2.default.createElement(_navbar2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}), props.children, _react2.default.createElement(_style2.default, {
		styleId: '756793230',
		css: '@font-face{font-family:Hamster;src:url(\'static/Hamster.otf\') format(\'opentype\');}@font-face{font-family:VTCSuperMarketSaleTall;src:url(\'static/VTCSuperMarketSaleTall.ttf\') format(\'truetype\');}html{height:100%;}body{background-color:#8cbcee;background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 56 28\' width=\'56\' height=\'28\'%3E%3Cpath fill=\'%2363a0e1\' fill-opacity=\'0.4\' d=\'M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z\'%3E%3C/path%3E%3C/svg%3E");margin:0;height:100%;font-size:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}body>div,body>div>div,body>div>div>div{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}.wrapper{background-color:#ffffff;display:grid;grid-template-columns:1fr;}@media only screen and (min-device-width:375px) and (max-device-width:667px) and (-webkit-min-device-pixel-ratio:2){body{background:#ffffff url();padding:0 12px;}}@media only screen and (min-device-width:414px) and (max-device-width:736px) and (-webkit-min-device-pixel-ratio:3){body{background:#ffffff url();padding:0 12px;}}@media only screen and (min-device-width:768px) and (max-device-width:1024px) and (-webkit-min-device-pixel-ratio:2){body{margin:0;}.wrapper{margin:0 auto;width:750px;}}@media screen and (min-device-width:1200px) and (-webkit-min-device-pixel-ratio:1){.wrapper{margin:0 auto;width:650px;grid-template-rows:90px auto auto auto;}}@media screen and (min-device-width:1200px) and (-webkit-min-device-pixel-ratio:2) and (min-resolution:192dpi){.wrapper{margin:0 auto;width:650px;grid-template-rows:repeat(4,auto);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVxQixBQUd5QixBQUllLEFBSXZCLEFBR2EsQUFZWixBQUlZLEFBTUMsQUFNQSxBQU1oQixBQUdLLEFBTUEsQUFRQSxTQWhCZixHQXJDRCxFQXdDYyxBQU1BLEFBUUEsTUE5RG9DLEtBV21qRCxBQWdCdmxELEFBTUcsQUFNQSxDQVVoQixBQU13QyxBQVFKLFNBM0Q0QixHQXdCdEMsRUFNMUIsQUFNQSxvQkF3QkEsSUFuQ0QsQ0EyQkMsSUF2REQsS0FzQnFCLHlCQWxCckIsd0VBbUJBLGs5Q0FaVSxTQUNHLFlBQ0csZUFDRiwwRUFDVSxtR0FDSCxpR0FDckIiLCJmaWxlIjoiY29tcG9uZW50cy9sYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pheWZhbGxvbi9EZXZlbG9wbWVudC9uZXh0L2hheW1hcmtldC1idGMtMiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vbmF2YmFyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInO1xuXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuXHRcdDxoZWFkPlxuXHRcdFx0PHRpdGxlPkhheW1hcmtldCBCaXRjb2luIFN1cGVyZXR0ZTwvdGl0bGU+XG5cdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuYnV0dGZsYXJlLmNvbS9hamF4L2xpYnMvbm9ybWFsaXplLzcuMC4wL25vcm1hbGl6ZS5taW4uY3NzXCIgLz5cblx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvcmpqNmNsci5jc3NcIiAvPlxuXHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvc3RhdGljL2Zhdmljb24ucG5nXCIgLz5cblx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG5cdFx0PC9oZWFkPlxuXHRcdDxOYXZiYXIgLz5cblx0XHR7cHJvcHMuY2hpbGRyZW59XG5cdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdEBmb250LWZhY2Uge1xuXHRcdFx0XHRmb250LWZhbWlseTogSGFtc3Rlcjtcblx0XHRcdFx0c3JjOiB1cmwoJ3N0YXRpYy9IYW1zdGVyLm90ZicpIGZvcm1hdCgnb3BlbnR5cGUnKTtcblx0XHRcdH1cblx0XHRcdEBmb250LWZhY2Uge1xuXHRcdFx0XHRmb250LWZhbWlseTogVlRDU3VwZXJNYXJrZXRTYWxlVGFsbDtcblx0XHRcdFx0c3JjOiB1cmwoJ3N0YXRpYy9WVENTdXBlck1hcmtldFNhbGVUYWxsLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcblx0XHRcdH1cblx0XHRcdGh0bWwge1xuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHR9XG5cdFx0XHRib2R5IHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzhjYmNlZTtcblx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NiAyOCcgd2lkdGg9JzU2JyBoZWlnaHQ9JzI4JyUzRSUzQ3BhdGggZmlsbD0nJTIzNjNhMGUxJyBmaWxsLW9wYWNpdHk9JzAuNCcgZD0nTTU2IDI2djJoLTcuNzVjMi4zLTEuMjcgNC45NC0yIDcuNzUtMnptLTI2IDJhMiAyIDAgMSAwLTQgMGgtNC4wOUEyNS45OCAyNS45OCAwIDAgMCAwIDE2di0yYy42NyAwIDEuMzQuMDIgMiAuMDdWMTRhMiAyIDAgMCAwLTItMnYtMmE0IDQgMCAwIDEgMy45OCAzLjYgMjguMDkgMjguMDkgMCAwIDEgMi44LTMuODZBOCA4IDAgMCAwIDAgNlY0YTkuOTkgOS45OSAwIDAgMSA4LjE3IDQuMjNjLjk0LS45NSAxLjk2LTEuODMgMy4wMy0yLjYzQTEzLjk4IDEzLjk4IDAgMCAwIDAgMGg3Ljc1YzIgMS4xIDMuNzMgMi42MyA1LjEgNC40NSAxLjEyLS43MiAyLjMtMS4zNyAzLjUzLTEuOTNBMjAuMSAyMC4xIDAgMCAwIDE0LjI4IDBoMi43Yy40NS41Ni44OCAxLjE0IDEuMjkgMS43NCAxLjMtLjQ4IDIuNjMtLjg3IDQtMS4xNS0uMTEtLjItLjIzLS40LS4zNi0uNTlIMjZ2LjA3YTI4LjQgMjguNCAwIDAgMSA0IDBWMGg0LjA5bC0uMzcuNTljMS4zOC4yOCAyLjcyLjY3IDQuMDEgMS4xNS40LS42Ljg0LTEuMTggMS4zLTEuNzRoMi42OWEyMC4xIDIwLjEgMCAwIDAtMi4xIDIuNTJjMS4yMy41NiAyLjQxIDEuMiAzLjU0IDEuOTNBMTYuMDggMTYuMDggMCAwIDEgNDguMjUgMEg1NmMtNC41OCAwLTguNjUgMi4yLTExLjIgNS42IDEuMDcuOCAyLjA5IDEuNjggMy4wMyAyLjYzQTkuOTkgOS45OSAwIDAgMSA1NiA0djJhOCA4IDAgMCAwLTYuNzcgMy43NGMxLjAzIDEuMiAxLjk3IDIuNSAyLjc5IDMuODZBNCA0IDAgMCAxIDU2IDEwdjJhMiAyIDAgMCAwLTIgMi4wNyAyOC40IDI4LjQgMCAwIDEgMi0uMDd2MmMtOS4yIDAtMTcuMyA0Ljc4LTIxLjkxIDEySDMwek03Ljc1IDI4SDB2LTJjMi44MSAwIDUuNDYuNzMgNy43NSAyek01NiAyMHYyYy01LjYgMC0xMC42NSAyLjMtMTQuMjggNmgtMi43YzQuMDQtNC44OSAxMC4xNS04IDE2Ljk4LTh6bS0zOS4wMyA4aC0yLjY5QzEwLjY1IDI0LjMgNS42IDIyIDAgMjJ2LTJjNi44MyAwIDEyLjk0IDMuMTEgMTYuOTcgOHptMTUuMDEtLjRhMjguMDkgMjguMDkgMCAwIDEgMi44LTMuODYgOCA4IDAgMCAwLTEzLjU1IDBjMS4wMyAxLjIgMS45NyAyLjUgMi43OSAzLjg2YTQgNCAwIDAgMSA3Ljk2IDB6bTE0LjI5LTExLjg2YzEuMy0uNDggMi42My0uODcgNC0xLjE1YTI1Ljk5IDI1Ljk5IDAgMCAwLTQ0LjU1IDBjMS4zOC4yOCAyLjcyLjY3IDQuMDEgMS4xNWEyMS45OCAyMS45OCAwIDAgMSAzNi41NCAwem0tNS40MyAyLjcxYzEuMTMtLjcyIDIuMy0xLjM3IDMuNTQtMS45M2ExOS45OCAxOS45OCAwIDAgMC0zMi43NiAwYzEuMjMuNTYgMi40MSAxLjIgMy41NCAxLjkzYTE1Ljk4IDE1Ljk4IDAgMCAxIDI1LjY4IDB6bS00LjY3IDMuNzhjLjk0LS45NSAxLjk2LTEuODMgMy4wMy0yLjYzYTEzLjk4IDEzLjk4IDAgMCAwLTIyLjQgMGMxLjA3LjggMi4wOSAxLjY4IDMuMDMgMi42M2E5Ljk5IDkuOTkgMCAwIDEgMTYuMzQgMHonJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXCIpO1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0Zm9udC1zaXplOiAxNXB4O1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XG5cdFx0XHR9XG5cdFx0XHRib2R5ID4gZGl2LFxuXHRcdFx0Ym9keSA+IGRpdiA+IGRpdixcblx0XHRcdGJvZHkgPiBkaXYgPiBkaXYgPiBkaXYge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogc3RyZXRjaDtcblx0XHRcdH1cblx0XHRcdC53cmFwcGVyIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblx0XHRcdFx0ZGlzcGxheTogZ3JpZDtcblx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG5cdFx0XHR9XG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA2NjdweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcblx0XHRcdFx0Ym9keSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZmZmZiB1cmwoKTtcblx0XHRcdFx0XHRwYWRkaW5nOiAwIDEycHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDczNnB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMykge1xuXHRcdFx0XHRib2R5IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmZmZmIHVybCgpO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDAgMTJweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xuXHRcdFx0XHRib2R5IHtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0LndyYXBwZXIge1xuXHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdHdpZHRoOiA3NTBweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDEyMDBweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEpIHtcblx0XHRcdFx0LndyYXBwZXIge1xuXHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdHdpZHRoOiA2NTBweDtcblx0XHRcdFx0XHRncmlkLXRlbXBsYXRlLXJvd3M6IDkwcHggYXV0byBhdXRvIGF1dG87XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDEyMDBweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSkge1xuXHRcdFx0XHQud3JhcHBlciB7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdFx0d2lkdGg6IDY1MHB4O1xuXHRcdFx0XHRcdGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIGF1dG8pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0YH08L3N0eWxlPlxuXHQ8L2Rpdj5cbik7XG5cbkxheW91dC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcblx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmNvaW5kZXNrLmNvbS92MS9icGkvY3VycmVudHByaWNlLmpzb24nKTtcblx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cblx0cmV0dXJuIHtcblx0XHR0aW1lOiBkYXRhLnRpbWUudXBkYXRlZCxcblx0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=components/layout.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJOYXZiYXIiLCJGb290ZXIiLCJMYXlvdXQiLCJwcm9wcyIsImNoaWxkcmVuIiwiZ2V0SW5pdGlhbFByb3BzIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSIsInRpbWUiLCJ1cGRhdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVk7Ozs7Ozs7OztBQUVuQixJQUFNLFNBQVMsU0FBVCxBQUFTLGNBQUE7d0JBQ2QsY0FBQTtxQ0FBQSxBQUFlOzthQUFmO2VBQUEsQUFDQztBQUREO0FBQUEsRUFBQSxrQkFDQyxjQUFBO2FBQUE7O2FBQUE7ZUFBQSxBQUNDO0FBREQ7QUFBQSxvQkFDQyxjQUFBO2FBQUE7O2FBQUE7ZUFBQTtBQUFBO0FBQUEsSUFERCxBQUNDLEFBQ0Esd0VBQU0sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEIsc0ZBQTVCOzthQUFBO2VBRkQsQUFFQyxBQUNBO0FBREE7NkNBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEIsa0RBQTVCOzthQUFBO2VBSEQsQUFHQyxBQUNBO0FBREE7NkNBQ00sS0FBTixBQUFVLFFBQU8sTUFBakIsQUFBc0Isa0NBQXRCOzthQUFBO2VBSkQsQUFJQyxBQUNBO0FBREE7NkNBQ00sTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEIsa0RBQTlCOzthQUFBO2VBTkYsQUFDQyxBQUtDLEFBRUQ7QUFGQztzQkFFRCxBQUFDOzthQUFEO2VBUkQsQUFRQyxBQUNDO0FBREQ7QUFBQSxXQVJELEFBU1E7V0FUUjtPQURjLEFBQ2Q7QUFBQTtBQUREOztBQW9GQSxPQUFBLEFBQU8sMkZBQWtCLG1CQUFBO1VBQUE7K0RBQUE7WUFBQTtvQ0FBQTtTQUFBO3FCQUFBO1lBQ04sTUFETSxBQUNOLEFBQU07O1NBQWxCO0FBRGtCLG9CQUFBO3FCQUFBO1lBRUwsSUFGSyxBQUVMLEFBQUk7O1NBQWpCO0FBRmtCLHFCQUFBOztZQUtqQixLQUFBLEFBQUssS0FMWSxBQUlqQixBQUNVO0FBRFYsQUFDTjs7U0FMdUI7U0FBQTtxQkFBQTs7QUFBQTthQUFBO0FBQXpCLEFBU0E7O2tCQUFBLEFBQWUiLCJmaWxlIjoibGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYXlmYWxsb24vRGV2ZWxvcG1lbnQvbmV4dC9oYXltYXJrZXQtYnRjLTIifQ==