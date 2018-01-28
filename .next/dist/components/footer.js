"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/jayfallon/Development/next/haymarket-btc-2/components/footer.js";


var Footer = function Footer(props) {
	return _react2.default.createElement("footer", {
		className: "jsx-1483513667",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 4
		}
	}, _react2.default.createElement("div", {
		className: "jsx-1483513667" + " " + "current-prices",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}, "*Current prices as of: ", props.time), _react2.default.createElement("div", {
		className: "jsx-1483513667" + " " + "copyright",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}, "\xA92018 - ", _react2.default.createElement("a", { href: "https://undenary.com", className: "jsx-1483513667",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, "Undenary Creative")), _react2.default.createElement(_style2.default, {
		styleId: "1483513667",
		css: "footer.jsx-1483513667{background-color:#ffffff;padding-bottom:24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.current-prices.jsx-1483513667{color:#4a4a4a;font-family:'Hamster',sdans-serif;font-size:1.867rem;}.copyright.jsx-1483513667{margin-top:24px;color:#8cbcee;font-family:'VTCSuperMarketSaleTall',sans-serif;font-size:1rem;}.copyright.jsx-1483513667 a.jsx-1483513667{color:#8cbcee;text-decoration:none;}@media only screen and (min-device-width:375px) and (max-device-width:667px) and (-webkit-min-device-pixel-ratio:2){.current-prices.jsx-1483513667{font-size:1.4rem;}}@media only screen and (min-device-width:414px) and (max-device-width:736px) and (-webkit-min-device-pixel-ratio:3){.current-prices.jsx-1483513667{font-size:1.4rem;}}@media only screen and (min-device-width:375px) and (max-device-width:812px) and (-webkit-min-device-pixel-ratio:3){.current-prices.jsx-1483513667{font-size:1.4rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFjLEFBRzhCLEFBUVgsQUFLRSxBQU1GLEFBS0ksQUFLQSxBQUtBLGNBekJpQixBQVdkLEVBTlAsQ0FXZCxBQUtBLEFBS0EsUUFsQ29CLEtBYzZCLEtBTWxELFVBbkJjLEdBUU0sbUJBQ3BCLFdBS2dCLGVBQ2hCLDBCQWR1Qiw4RUFDRyxpR0FDTiw2RkFDcEIiLCJmaWxlIjoiY29tcG9uZW50cy9mb290ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pheWZhbGxvbi9EZXZlbG9wbWVudC9uZXh0L2hheW1hcmtldC1idGMtMiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IEZvb3RlciA9IHByb3BzID0+IChcblx0PGZvb3Rlcj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImN1cnJlbnQtcHJpY2VzXCI+KkN1cnJlbnQgcHJpY2VzIGFzIG9mOiB7cHJvcHMudGltZX08L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvcHlyaWdodFwiPlxuXHRcdFx0JmNvcHk7MjAxOCAtIDxhIGhyZWY9XCJodHRwczovL3VuZGVuYXJ5LmNvbVwiPlVuZGVuYXJ5IENyZWF0aXZlPC9hPlxuXHRcdDwvZGl2PlxuXHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdGZvb3RlciB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cdFx0XHRcdHBhZGRpbmctYm90dG9tOiAyNHB4O1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0fVxuXHRcdFx0LmN1cnJlbnQtcHJpY2VzIHtcblx0XHRcdFx0Y29sb3I6ICM0YTRhNGE7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiAnSGFtc3RlcicsIHNkYW5zLXNlcmlmO1xuXHRcdFx0XHRmb250LXNpemU6IDEuODY3cmVtO1xuXHRcdFx0fVxuXHRcdFx0LmNvcHlyaWdodCB7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDI0cHg7XG5cdFx0XHRcdGNvbG9yOiAjOGNiY2VlO1xuXHRcdFx0XHRmb250LWZhbWlseTogJ1ZUQ1N1cGVyTWFya2V0U2FsZVRhbGwnLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHRmb250LXNpemU6IDFyZW07XG5cdFx0XHR9XG5cdFx0XHQuY29weXJpZ2h0IGEge1xuXHRcdFx0XHRjb2xvcjogIzhjYmNlZTtcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0fVxuXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNjY3cHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG5cdFx0XHRcdC5jdXJyZW50LXByaWNlcyB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxLjRyZW07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDczNnB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMykge1xuXHRcdFx0XHQuY3VycmVudC1wcmljZXMge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMS40cmVtO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA4MTJweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHtcblx0XHRcdFx0LmN1cnJlbnQtcHJpY2VzIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDEuNHJlbTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdGB9PC9zdHlsZT5cblx0PC9mb290ZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXX0= */\n/*@ sourceURL=components/footer.js */"
	}));
};

exports.default = Footer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9vdGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJGb290ZXIiLCJwcm9wcyIsInRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxTQUFTLFNBQVQsQUFBUyxjQUFBO3dCQUNkLGNBQUE7YUFBQTs7YUFBQTtlQUFBLEFBQ0M7QUFERDtBQUFBLEVBQUEsa0JBQ0MsY0FBQTtzQ0FBQSxBQUFlOzthQUFmO2VBQUE7QUFBQTtBQUFBLElBQXdELGlDQUR6RCxBQUNDLEFBQThELEFBQzlELHVCQUFBLGNBQUE7c0NBQUEsQUFBZTs7YUFBZjtlQUFBO0FBQUE7QUFBQSxJQUNjLCtCQUFBLGNBQUEsT0FBRyxNQUFILEFBQVEsbUNBQVI7O2FBQUE7ZUFBQTtBQUFBO0lBSGYsQUFFQyxBQUNjO1dBSGY7T0FEYyxBQUNkO0FBQUE7QUFERCxBQWlEQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJmb290ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pheWZhbGxvbi9EZXZlbG9wbWVudC9uZXh0L2hheW1hcmtldC1idGMtMiJ9