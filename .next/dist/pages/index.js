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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _prices = require('../components/prices');

var _prices2 = _interopRequireDefault(_prices);

var _footer = require('../components/footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jayfallon/Development/next/haymarket-btc-2/pages/index.js?entry';


var Index = function Index(props) {
	return _react2.default.createElement(_layout2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, _react2.default.createElement('main', {
		className: 'jsx-3747324419',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, _react2.default.createElement('h3', {
		className: 'jsx-3747324419' + ' ' + 'fresh',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}, _react2.default.createElement('span', {
		className: 'jsx-3747324419',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}, 'Extra Fresh*')), _react2.default.createElement('h1', {
		className: 'jsx-3747324419',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, _react2.default.createElement('span', {
		className: 'jsx-3747324419',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}, '"Bitcoin"'), _react2.default.createElement('span', {
		className: 'jsx-3747324419',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, ' Prices')), _react2.default.createElement(_prices2.default, { bpi: props.bpi, __source: {
			fileName: _jsxFileName,
			lineNumber: 17
		}
	})), _react2.default.createElement(_footer2.default, { time: props.time, __source: {
			fileName: _jsxFileName,
			lineNumber: 19
		}
	}), _react2.default.createElement(_style2.default, {
		styleId: '3747324419',
		css: 'main.jsx-3747324419{background-color:#ffffff;padding:0 12px;}h3.fresh.jsx-3747324419{background-image:url(/static/squiggly.svg);background-repeat:no-repeat;background-size:contain;background-position:center center;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}h3.fresh.jsx-3747324419 span.jsx-3747324419{font-family:\'swingdancer\',sans-serif;font-size:4rem;color:#ff0000;}h1.jsx-3747324419{margin:36px 0 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h1.jsx-3747324419 span.jsx-3747324419{color:#341482;font-family:\'VTCSuperMarketSaleTall\',sans-serif;font-size:8rem;text-shadow:8px 8px 0 #ffdd40;-webkit-transform:rotate(-7deg);-ms-transform:rotate(-7deg);transform:rotate(-7deg);}@media only screen and (min-device-width:375px) and (max-device-width:667px) and (-webkit-min-device-pixel-ratio:2){h3.fresh.jsx-3747324419 span.jsx-3747324419{font-size:3rem;}h1.jsx-3747324419 span.jsx-3747324419{font-size:6.2rem;}}@media only screen and (min-device-width:414px) and (max-device-width:736px) and (-webkit-min-device-pixel-ratio:3){h3.fresh.jsx-3747324419 span.jsx-3747324419{font-size:3.4rem;}h1.jsx-3747324419 span.jsx-3747324419{font-size:6.667rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CYyxBQUc4QixBQUlrQixBQVVMLEFBS3RCLEFBT0YsQUFTRSxBQUdFLEFBTUEsQUFHRSxjQXBCNkIsQ0FTakQsQ0FoQmEsQ0FtQmIsQUFNQSxFQUdBLE1BL0NlLFlBY0EsR0FiaEIsR0FHNkIsU0FXZCxVQVlDLElBWGhCLEtBWHlCLE1BdUJNLGFBUlIsS0FkWSxZQXVCVixzQkF0QmYsU0FDSSw4QkFhVSx1QkFTeEIscUJBckJ3Qix1REFhSiw0Q0FacEIsaURBYUEiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pheWZhbGxvbi9EZXZlbG9wbWVudC9uZXh0L2hheW1hcmtldC1idGMtMiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0JztcbmltcG9ydCBGZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IFByaWNlcyBmcm9tICcuLi9jb21wb25lbnRzL3ByaWNlcyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJztcblxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXG5cdDxMYXlvdXQ+XG5cdFx0PG1haW4+XG5cdFx0XHQ8aDMgY2xhc3NOYW1lPVwiZnJlc2hcIj5cblx0XHRcdFx0PHNwYW4+RXh0cmEgRnJlc2gqPC9zcGFuPlxuXHRcdFx0PC9oMz5cblx0XHRcdDxoMT5cblx0XHRcdFx0PHNwYW4+XCJCaXRjb2luXCI8L3NwYW4+XG5cdFx0XHRcdDxzcGFuPiBQcmljZXM8L3NwYW4+XG5cdFx0XHQ8L2gxPlxuXHRcdFx0PFByaWNlcyBicGk9e3Byb3BzLmJwaX0gLz5cblx0XHQ8L21haW4+XG5cdFx0PEZvb3RlciB0aW1lPXtwcm9wcy50aW1lfSAvPlxuXHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdG1haW4ge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXHRcdFx0XHRwYWRkaW5nOiAwIDEycHg7XG5cdFx0XHR9XG5cdFx0XHRoMy5mcmVzaCB7XG5cdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL3NxdWlnZ2x5LnN2Zyk7XG5cdFx0XHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcblx0XHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdH1cblxuXHRcdFx0aDMuZnJlc2ggc3BhbiB7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiAnc3dpbmdkYW5jZXInLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHRmb250LXNpemU6IDRyZW07XG5cdFx0XHRcdGNvbG9yOiAjZmYwMDAwO1xuXHRcdFx0fVxuXHRcdFx0aDEge1xuXHRcdFx0XHRtYXJnaW46IDM2cHggMCAwO1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdH1cblx0XHRcdGgxIHNwYW4ge1xuXHRcdFx0XHRjb2xvcjogIzM0MTQ4Mjtcblx0XHRcdFx0Zm9udC1mYW1pbHk6ICdWVENTdXBlck1hcmtldFNhbGVUYWxsJywgc2Fucy1zZXJpZjtcblx0XHRcdFx0Zm9udC1zaXplOiA4cmVtO1xuXHRcdFx0XHR0ZXh0LXNoYWRvdzogOHB4IDhweCAwICNmZmRkNDA7XG5cdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC03ZGVnKTtcblx0XHRcdH1cblxuXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNjY3cHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG5cdFx0XHRcdGgzLmZyZXNoIHNwYW4ge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogM3JlbTtcblx0XHRcdFx0fVxuXHRcdFx0XHRoMSBzcGFuIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDYuMnJlbTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0MTRweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA3MzZweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHtcblx0XHRcdFx0aDMuZnJlc2ggc3BhbiB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAzLjRyZW07XG5cdFx0XHRcdH1cblx0XHRcdFx0aDEgc3BhbiB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiA2LjY2N3JlbTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdGB9PC9zdHlsZT5cblx0PC9MYXlvdXQ+XG4pO1xuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcblx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmNvaW5kZXNrLmNvbS92MS9icGkvY3VycmVudHByaWNlLmpzb24nKTtcblx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cblx0cmV0dXJuIHtcblx0XHR0aW1lOiBkYXRhLnRpbWUudXBkYXRlZCxcblx0XHRicGk6IGRhdGEuYnBpLFxuXHR9O1xuXG5cdGNvbnN0IHJlc0MgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuY29pbmRlc2suY29tL3YxL2JwaS9jdXJyZW50cHJpY2UvQ05ZLmpzb24nKTtcblx0Y29uc3QgZGF0YUMgPSBhd2FpdCByZXMuanNvbigpO1xuXG5cdHJldHVybiB7XG5cdFx0Y3BpOiBkYXRhLmJwaSxcblx0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
	}));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
	var res, data, resC, dataC;
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
						time: data.time.updated,
						bpi: data.bpi
					});

				case 9:
					resC = _context.sent;
					_context.next = 12;
					return res.json();

				case 12:
					dataC = _context.sent;
					return _context.abrupt('return', {
						cpi: data.bpi
					});

				case 14:
				case 'end':
					return _context.stop();
			}
		}
	}, _callee, this);
}));

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJMYXlvdXQiLCJGZXRjaCIsIlByaWNlcyIsIkZvb3RlciIsIkluZGV4IiwicHJvcHMiLCJicGkiLCJ0aW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSIsInVwZGF0ZWQiLCJyZXNDIiwiZGF0YUMiLCJjcGkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFZOzs7Ozs7Ozs7QUFFbkIsSUFBTSxRQUFRLFNBQVIsQUFBUSxhQUFBO3dCQUNiLEFBQUM7O2FBQUQ7ZUFBQSxBQUNDO0FBREQ7QUFBQSxFQUFBLGtCQUNDLGNBQUE7YUFBQTs7YUFBQTtlQUFBLEFBQ0M7QUFERDtBQUFBLG9CQUNDLGNBQUE7c0NBQUEsQUFBYzs7YUFBZDtlQUFBLEFBQ0M7QUFERDtBQUFBLG9CQUNDLGNBQUE7YUFBQTs7YUFBQTtlQUFBO0FBQUE7QUFBQSxJQUZGLEFBQ0MsQUFDQyxBQUVELGtDQUFBLGNBQUE7YUFBQTs7YUFBQTtlQUFBLEFBQ0M7QUFERDtBQUFBLG9CQUNDLGNBQUE7YUFBQTs7YUFBQTtlQUFBO0FBQUE7QUFBQSxJQURELEFBQ0MsQUFDQSw4QkFBQSxjQUFBO2FBQUE7O2FBQUE7ZUFBQTtBQUFBO0FBQUEsSUFORixBQUlDLEFBRUMsQUFFRCw2QkFBQSxBQUFDLGtDQUFPLEtBQUssTUFBYixBQUFtQjthQUFuQjtlQVRGLEFBQ0MsQUFRQyxBQUVEO0FBRkM7c0JBRUQsQUFBQyxrQ0FBTyxNQUFNLE1BQWQsQUFBb0I7YUFBcEI7ZUFYRCxBQVdDO0FBQUE7O1dBWEQ7T0FEYSxBQUNiO0FBQUE7QUFERDs7QUFxRUEsTUFBQSxBQUFNLDJGQUFrQixtQkFBQTtzQkFBQTsrREFBQTtZQUFBO29DQUFBO1NBQUE7cUJBQUE7WUFDTCxNQURLLEFBQ0wsQUFBTTs7U0FBbEI7QUFEaUIsb0JBQUE7cUJBQUE7WUFFSixJQUZJLEFBRUosQUFBSTs7U0FBakI7QUFGaUIscUJBQUE7O1lBS2hCLEtBQUEsQUFBSyxLQURMLEFBQ1UsQUFDaEI7V0FBSyxLQU5pQixBQUloQixBQUVJO0FBRkosQUFDTjs7U0FJSztBQVRpQixxQkFBQTtxQkFBQTtZQVVILElBVkcsQUFVSCxBQUFJOztTQUFsQjtBQVZpQixzQkFBQTs7V0FhakIsS0FiaUIsQUFZaEIsQUFDSTtBQURKLEFBQ047O1NBYnNCO1NBQUE7cUJBQUE7O0FBQUE7YUFBQTtBQUF4QixBQWlCQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamF5ZmFsbG9uL0RldmVsb3BtZW50L25leHQvaGF5bWFya2V0LWJ0Yy0yIn0=