'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: '地主算账',
        navigationBarTextStyle: 'black'
      }
    };
    _this.globalData = {
      userInfo: null,
      token: null
    };

    _this.use('requestfix');
    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      var _this2 = this;

      _wepy2.default.login().then(function (res) {
        if (res.code) {
          _wepy2.default.request({
            url: 'http://localhost:8088/auth/login',
            data: {
              code: res.code
            }
          }).then(function (res) {
            var result = res.data;
            if (result.code === 200) {
              _this2.globalData.token = result.data;
            } else {
              console.log('获取用户登录态失败！' + res.errMsg);
            }
          });
        } else {
          console.log('获取用户登录态失败！' + res.errMsg);
        }
      });
    }
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(callback) {
      var _this3 = this;

      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          _this3.globalData.userInfo = res.userInfo;
          callback && callback(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, undefined));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ0b2tlbiIsInVzZSIsImxvZ2luIiwidGhlbiIsInJlcyIsImNvZGUiLCJyZXF1ZXN0IiwidXJsIiwiZGF0YSIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJNc2ciLCJjYWxsYmFjayIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OztBQW9CRSxzQkFBYztBQUFBOztBQUFBOztBQUFBLFVBakJkQSxNQWlCYyxHQWpCTDtBQUNQQyxhQUFPLENBQ0wsYUFESyxDQURBO0FBSVBDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLE1BRnhCO0FBR05DLGdDQUF3QixNQUhsQjtBQUlOQyxnQ0FBd0I7QUFKbEI7QUFKRCxLQWlCSztBQUFBLFVBTGRDLFVBS2MsR0FMRDtBQUNYQyxnQkFBVSxJQURDO0FBRVhDLGFBQU87QUFGSSxLQUtDOztBQUVaLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBQ0EsVUFBS0EsR0FBTCxDQUFTLFdBQVQ7QUFIWTtBQUliOzs7OytCQUVVO0FBQUE7O0FBQ1QscUJBQUtDLEtBQUwsR0FDR0MsSUFESCxDQUNRLFVBQUNDLEdBQUQsRUFBUztBQUNiLFlBQUlBLElBQUlDLElBQVIsRUFBYztBQUNaLHlCQUFLQyxPQUFMLENBQWE7QUFDWEMsaUJBQUssa0NBRE07QUFFWEMsa0JBQU07QUFDSkgsb0JBQU1ELElBQUlDO0FBRE47QUFGSyxXQUFiLEVBS0dGLElBTEgsQ0FLUSxVQUFDQyxHQUFELEVBQVM7QUFDZixnQkFBSUssU0FBU0wsSUFBSUksSUFBakI7QUFDQSxnQkFBSUMsT0FBT0osSUFBUCxLQUFnQixHQUFwQixFQUF5QjtBQUN2QixxQkFBS1AsVUFBTCxDQUFnQkUsS0FBaEIsR0FBd0JTLE9BQU9ELElBQS9CO0FBQ0QsYUFGRCxNQUVPO0FBQ0xFLHNCQUFRQyxHQUFSLENBQVksZUFBZVAsSUFBSVEsTUFBL0I7QUFDRDtBQUNGLFdBWkQ7QUFhRCxTQWRELE1BY087QUFDTEYsa0JBQVFDLEdBQVIsQ0FBWSxlQUFlUCxJQUFJUSxNQUEvQjtBQUNEO0FBQ0YsT0FuQkg7QUFvQkQ7OztnQ0FFV0MsUSxFQUFVO0FBQUE7O0FBQ3BCLFVBQUksS0FBS2YsVUFBTCxDQUFnQkMsUUFBcEIsRUFBOEI7QUFDNUIsZUFBTyxLQUFLRCxVQUFMLENBQWdCQyxRQUF2QjtBQUNEO0FBQ0QscUJBQUtlLFdBQUwsQ0FBaUI7QUFDZkMsaUJBQVMsaUJBQUNYLEdBQUQsRUFBUztBQUNoQixpQkFBS04sVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJLLElBQUlMLFFBQS9CO0FBQ0FjLHNCQUFZQSxTQUFTVCxJQUFJTCxRQUFiLENBQVo7QUFDRDtBQUpjLE9BQWpCO0FBTUQ7Ozs7RUF6RDBCLGVBQUtpQixHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gICAgY29uZmlnID0ge1xuICAgICAgcGFnZXM6IFtcbiAgICAgICAgJ3BhZ2VzL2luZGV4J1xuICAgICAgXSxcbiAgICAgIHdpbmRvdzoge1xuICAgICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflnLDkuLvnrpfotKYnLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2xvYmFsRGF0YSA9IHtcbiAgICAgIHVzZXJJbmZvOiBudWxsLFxuICAgICAgdG9rZW46IG51bGxcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKClcbiAgICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgICAgIHRoaXMudXNlKCdwcm9taXNpZnknKVxuICAgIH1cblxuICAgIG9uTGF1bmNoKCkge1xuICAgICAgd2VweS5sb2dpbigpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAocmVzLmNvZGUpIHtcbiAgICAgICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9hdXRoL2xvZ2luJyxcbiAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGNvZGU6IHJlcy5jb2RlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gcmVzLmRhdGFcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsb2JhbERhdGEudG9rZW4gPSByZXN1bHQuZGF0YVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfojrflj5bnlKjmiLfnmbvlvZXmgIHlpLHotKXvvIEnICsgcmVzLmVyck1zZylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+iOt+WPlueUqOaIt+eZu+W9leaAgeWksei0pe+8gScgKyByZXMuZXJyTXNnKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRVc2VySW5mbyhjYWxsYmFjaykge1xuICAgICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXG4gICAgICB9XG4gICAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHJlcy51c2VySW5mbylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==