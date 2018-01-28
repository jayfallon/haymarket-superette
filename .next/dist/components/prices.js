"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/jayfallon/Development/next/haymarket-btc-2/components/prices.js";


var Prices = function (_React$Component) {
    (0, _inherits3.default)(Prices, _React$Component);

    function Prices() {
        (0, _classCallCheck3.default)(this, Prices);

        return (0, _possibleConstructorReturn3.default)(this, (Prices.__proto__ || (0, _getPrototypeOf2.default)(Prices)).apply(this, arguments));
    }

    (0, _createClass3.default)(Prices, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement("div", {
                className: "jsx-2228971492" + " " + "grid-wrapper",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 4
                }
            }, _react2.default.createElement("div", {
                className: "jsx-2228971492" + " " + "price-grid",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 5
                }
            }, _react2.default.createElement("span", {
                className: "jsx-2228971492" + " " + "key",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 6
                }
            }, "USD:"), _react2.default.createElement("span", {
                className: "jsx-2228971492" + " " + "value",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            }, _react2.default.createElement("span", {
                className: "jsx-2228971492",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            }, _react2.default.createElement("sup", {
                className: "jsx-2228971492",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            }, "$"), this.props.bpi.USD.rate)), _react2.default.createElement("span", {
                className: "jsx-2228971492" + " " + "key",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, "GBP:"), _react2.default.createElement("span", {
                className: "jsx-2228971492" + " " + "value",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, _react2.default.createElement("span", {
                className: "jsx-2228971492",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, _react2.default.createElement("sup", {
                className: "jsx-2228971492",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, "\xA3"), this.props.bpi.GBP.rate)), _react2.default.createElement("span", {
                className: "jsx-2228971492" + " " + "key",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, "EUR:"), _react2.default.createElement("span", {
                className: "jsx-2228971492" + " " + "value",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, _react2.default.createElement("span", {
                className: "jsx-2228971492",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, _react2.default.createElement("sup", {
                className: "jsx-2228971492",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, "\u20AC"), this.props.bpi.EUR.rate))), _react2.default.createElement(_style2.default, {
                styleId: "2228971492",
                css: ".grid-wrapper.jsx-2228971492{margin:36px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.price-grid.jsx-2228971492{width:100%;color:#FF0000;font-family:'VTCSuperMarketSaleTall',sans-serif;font-size:4.667rem;display:grid;grid-template-columns:auto auto;grid-gap:24px;}.key.jsx-2228971492{text-align:right;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}.value.jsx-2228971492 sup.jsx-2228971492{font-family:\"scriptorama-markdown-jf\",sans-serif;font-size:3rem;}.value.jsx-2228971492 span.jsx-2228971492{background-image:url(/static/twist.svg);background-repeat:no-repeat;background-size:contain;background-position:center center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}@media only screen and (min-device-width:375px) and (max-device-width:667px) and (-webkit-min-device-pixel-ratio:2){.price-grid.jsx-2228971492{width:90%;font-size:3.5rem;}.value.jsx-2228971492 sup.jsx-2228971492{font-size:2rem;}}@media only screen and (min-device-width:414px) and (max-device-width:736px) and (-webkit-min-device-pixel-ratio:3){.price-grid.jsx-2228971492{width:90%;font-size:3.5rem;}.value.jsx-2228971492 sup.jsx-2228971492{font-size:2rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJpY2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCZ0IsQUFJeUIsQUFJVyxBQVVNLEFBUWdDLEFBSVQsQUFRMUIsQUFJSyxBQUtMLEFBSUssVUFaRSxBQVNBLENBdkNQLEdBTEQsQ0F1Q2IsQUFTQSxFQWpDa0IsUUFUK0IsRUE4QmpELEFBU0EsYUFsQjRCLFNBSGpDLGVBQUMsSUFJNEIsS0FwQnhCLGVBUHVCLEFBZTNCLElBUmlCLEFBcUJxQixhQXBCRixxQkFxQmQsV0FuQkosY0FDbEIsb0NBVkEsVUE2QkEiLCJmaWxlIjoiY29tcG9uZW50cy9wcmljZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pheWZhbGxvbi9EZXZlbG9wbWVudC9uZXh0L2hheW1hcmtldC1idGMtMiIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByaWNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncmlkLXdyYXBwZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcmljZS1ncmlkXCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwia2V5XCI+VVNEOjwvc3Bhbj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ2YWx1ZVwiPlxuXHRcdFx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0XHRcdDxzdXA+JDwvc3VwPlxuXHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5icGkuVVNELnJhdGV9XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImtleVwiPkdCUDo8L3NwYW4+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidmFsdWVcIj5cblx0XHRcdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdFx0XHQ8c3VwPsKjPC9zdXA+XG5cdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmJwaS5HQlAucmF0ZX1cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwia2V5XCI+RVVSOjwvc3Bhbj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ2YWx1ZVwiPlxuXHRcdFx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0XHRcdDxzdXA+4oKsPC9zdXA+XG5cdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmJwaS5FVVIucmF0ZX1cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5ncmlkLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzNnB4IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucHJpY2UtZ3JpZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkYwMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdWVENTdXBlck1hcmtldFNhbGVUYWxsJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNC42NjdyZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1nYXA6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmtleSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudmFsdWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudmFsdWUgc3VwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcInNjcmlwdG9yYW1hLW1hcmtkb3duLWpmXCIsc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC52YWx1ZSBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL3R3aXN0LnN2Zyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA2NjdweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcmljZS1ncmlkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlIHN1cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDczNnB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLnByaWNlLWdyaWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAudmFsdWUgc3VwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByaWNlcztcbiJdfQ== */\n/*@ sourceURL=components/prices.js */"
            }));
        }
    }]);

    return Prices;
}(_react2.default.Component);

exports.default = Prices;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJpY2VzLmpzIl0sIm5hbWVzIjpbIlByaWNlcyIsInByb3BzIiwiYnBpIiwiVVNEIiwicmF0ZSIsIkdCUCIsIkVVUiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTSxBOzs7Ozs7Ozs7OztpQ0FDSSxBQUNSO21DQUNDLGNBQUE7b0RBQUEsQUFBZTs7OEJBQWY7Z0NBQUEsQUFDQztBQUREO0FBQUEsYUFBQSxrQkFDQyxjQUFBO29EQUFBLEFBQWU7OzhCQUFmO2dDQUFBLEFBQ0M7QUFERDtBQUFBLCtCQUNDLGNBQUE7b0RBQUEsQUFBZ0I7OzhCQUFoQjtnQ0FBQTtBQUFBO0FBQUEsZUFERCxBQUNDLEFBQ0EseUJBQUEsY0FBQTtvREFBQSxBQUFnQjs7OEJBQWhCO2dDQUFBLEFBQ0M7QUFERDtBQUFBLCtCQUNDLGNBQUE7MkJBQUE7OzhCQUFBO2dDQUFBLEFBQ0M7QUFERDtBQUFBLCtCQUNDLGNBQUE7MkJBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURELEFBQ0MsQUFDQyxXQUFBLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxJQUxuQixBQUVDLEFBQ0MsQUFFcUIsQUFHdEIsd0JBQUEsY0FBQTtvREFBQSxBQUFnQjs7OEJBQWhCO2dDQUFBO0FBQUE7QUFBQSxlQVJELEFBUUMsQUFDQSx5QkFBQSxjQUFBO29EQUFBLEFBQWdCOzs4QkFBaEI7Z0NBQUEsQUFDQztBQUREO0FBQUEsK0JBQ0MsY0FBQTsyQkFBQTs7OEJBQUE7Z0NBQUEsQUFDQztBQUREO0FBQUEsK0JBQ0MsY0FBQTsyQkFBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREQsQUFDQyxBQUNDLGNBQUEsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLElBWm5CLEFBU0MsQUFDQyxBQUVxQixBQUd0Qix3QkFBQSxjQUFBO29EQUFBLEFBQWdCOzs4QkFBaEI7Z0NBQUE7QUFBQTtBQUFBLGVBZkQsQUFlQyxBQUNBLHlCQUFBLGNBQUE7b0RBQUEsQUFBZ0I7OzhCQUFoQjtnQ0FBQSxBQUNDO0FBREQ7QUFBQSwrQkFDQyxjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQSxBQUNDO0FBREQ7QUFBQSwrQkFDQyxjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFERCxBQUNDLEFBQ0MsZ0JBQUEsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLElBcEJwQixBQUNDLEFBZ0JDLEFBQ0MsQUFFcUI7eUJBcEJ4QjtxQkFERCxBQUNDLEFBZ0ZEO0FBaEZDOzs7OztFQUhrQixnQkFBTSxBLEFBc0YzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJwcmljZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pheWZhbGxvbi9EZXZlbG9wbWVudC9uZXh0L2hheW1hcmtldC1idGMtMiJ9