'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '活动列表'
    }, _this.$props = { "panel": { "class": "container" } }, _this.$events = {}, _this.components = {
      panel: _panel2.default
    }, _this.data = {
      userInfo: {
        nickName: '加载中...'
      }
    }, _this.computed = {}, _this.methods = {
      test: function test() {
        console.log(this.$parent.globalData);
        console.log(this.userInfo);
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      if (this.$parent.globalData.userInfo) {
        this.userInfo = this.$parent.globalData.userInfo;
      }
      _wepy2.default.getUserInfo().then(function (res) {
        _this2.$parent.globalData.userInfo = res.userInfo;
        _this2.userInfo = res.userInfo;
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwicGFuZWwiLCJkYXRhIiwidXNlckluZm8iLCJuaWNrTmFtZSIsImNvbXB1dGVkIiwibWV0aG9kcyIsInRlc3QiLCJjb25zb2xlIiwibG9nIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJldmVudHMiLCJnZXRVc2VySW5mbyIsInRoZW4iLCJyZXMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVZDLE0sR0FBUyxFQUFDLFNBQVEsRUFBQyxTQUFRLFdBQVQsRUFBVCxFLFFBQ1pDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFJVkMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBQ1JDLGtCQUFVO0FBREY7QUFETCxLLFFBTVBDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTtBQUNSQyxVQURRLGtCQUNGO0FBQ0pDLGdCQUFRQyxHQUFSLENBQVksS0FBS0MsT0FBTCxDQUFhQyxVQUF6QjtBQUNBSCxnQkFBUUMsR0FBUixDQUFZLEtBQUtOLFFBQWpCO0FBQ0Q7QUFKTyxLLFFBT1ZTLE0sR0FBUyxFOzs7Ozs2QkFFQTtBQUFBOztBQUNQLFVBQUksS0FBS0YsT0FBTCxDQUFhQyxVQUFiLENBQXdCUixRQUE1QixFQUFzQztBQUNwQyxhQUFLQSxRQUFMLEdBQWdCLEtBQUtPLE9BQUwsQ0FBYUMsVUFBYixDQUF3QlIsUUFBeEM7QUFDRDtBQUNELHFCQUFLVSxXQUFMLEdBQW1CQyxJQUFuQixDQUF3QixVQUFDQyxHQUFELEVBQVM7QUFDL0IsZUFBS0wsT0FBTCxDQUFhQyxVQUFiLENBQXdCUixRQUF4QixHQUFtQ1ksSUFBSVosUUFBdkM7QUFDQSxlQUFLQSxRQUFMLEdBQWdCWSxJQUFJWixRQUFwQjtBQUNELE9BSEQ7QUFJRDs7OztFQXBDZ0MsZUFBS2EsSTs7a0JBQW5CckIsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgUGFuZWwgZnJvbSAnLi4vY29tcG9uZW50cy9wYW5lbCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+a0u+WKqOWIl+ihqCdcbiAgICB9XG5cbiAgICRwcm9wcyA9IHtcInBhbmVsXCI6e1wiY2xhc3NcIjpcImNvbnRhaW5lclwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBwYW5lbDogUGFuZWxcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgdXNlckluZm86IHtcbiAgICAgICAgbmlja05hbWU6ICfliqDovb3kuK0uLi4nXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7fVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRlc3QoKXtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy4kcGFyZW50Lmdsb2JhbERhdGEpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlckluZm8pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge31cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGlmICh0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgICB0aGlzLnVzZXJJbmZvID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlckluZm9cbiAgICAgIH1cbiAgICAgIHdlcHkuZ2V0VXNlckluZm8oKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgdGhpcy51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==