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
      pages: ['pages/index', 'pages/detail'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: '地主算账',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        list: [{
          pagePath: 'pages/index',
          text: '活动'
        }, {
          pagePath: 'pages/detail',
          text: '明细'
        }]
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJsaXN0IiwicGFnZVBhdGgiLCJ0ZXh0IiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwidG9rZW4iLCJ1c2UiLCJsb2dpbiIsInRoZW4iLCJyZXMiLCJjb2RlIiwicmVxdWVzdCIsInVybCIsImRhdGEiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiZXJyTXNnIiwiY2FsbGJhY2siLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUE4QkUsc0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxVQTNCZEEsTUEyQmMsR0EzQkw7QUFDUEMsYUFBTyxDQUNMLGFBREssRUFFTCxjQUZLLENBREE7QUFLUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFHTkMsZ0NBQXdCLE1BSGxCO0FBSU5DLGdDQUF3QjtBQUpsQixPQUxEO0FBV1BDLGNBQVE7QUFDTkMsY0FBTSxDQUFDO0FBQ0xDLG9CQUFVLGFBREw7QUFFTEMsZ0JBQU07QUFGRCxTQUFELEVBR0g7QUFDREQsb0JBQVUsY0FEVDtBQUVEQyxnQkFBTTtBQUZMLFNBSEc7QUFEQTtBQVhELEtBMkJLO0FBQUEsVUFMZEMsVUFLYyxHQUxEO0FBQ1hDLGdCQUFVLElBREM7QUFFWEMsYUFBTztBQUZJLEtBS0M7O0FBRVosVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQSxVQUFLQSxHQUFMLENBQVMsV0FBVDtBQUhZO0FBSWI7Ozs7K0JBRVU7QUFBQTs7QUFDVCxxQkFBS0MsS0FBTCxHQUNHQyxJQURILENBQ1EsVUFBQ0MsR0FBRCxFQUFTO0FBQ2IsWUFBSUEsSUFBSUMsSUFBUixFQUFjO0FBQ1oseUJBQUtDLE9BQUwsQ0FBYTtBQUNYQyxpQkFBSyxrQ0FETTtBQUVYQyxrQkFBTTtBQUNKSCxvQkFBTUQsSUFBSUM7QUFETjtBQUZLLFdBQWIsRUFLR0YsSUFMSCxDQUtRLFVBQUNDLEdBQUQsRUFBUztBQUNmLGdCQUFJSyxTQUFTTCxJQUFJSSxJQUFqQjtBQUNBLGdCQUFJQyxPQUFPSixJQUFQLEtBQWdCLEdBQXBCLEVBQXlCO0FBQ3ZCLHFCQUFLUCxVQUFMLENBQWdCRSxLQUFoQixHQUF3QlMsT0FBT0QsSUFBL0I7QUFDRCxhQUZELE1BRU87QUFDTEUsc0JBQVFDLEdBQVIsQ0FBWSxlQUFlUCxJQUFJUSxNQUEvQjtBQUNEO0FBQ0YsV0FaRDtBQWFELFNBZEQsTUFjTztBQUNMRixrQkFBUUMsR0FBUixDQUFZLGVBQWVQLElBQUlRLE1BQS9CO0FBQ0Q7QUFDRixPQW5CSDtBQW9CRDs7O2dDQUVXQyxRLEVBQVU7QUFBQTs7QUFDcEIsVUFBSSxLQUFLZixVQUFMLENBQWdCQyxRQUFwQixFQUE4QjtBQUM1QixlQUFPLEtBQUtELFVBQUwsQ0FBZ0JDLFFBQXZCO0FBQ0Q7QUFDRCxxQkFBS2UsV0FBTCxDQUFpQjtBQUNmQyxpQkFBUyxpQkFBQ1gsR0FBRCxFQUFTO0FBQ2hCLGlCQUFLTixVQUFMLENBQWdCQyxRQUFoQixHQUEyQkssSUFBSUwsUUFBL0I7QUFDQWMsc0JBQVlBLFNBQVNULElBQUlMLFFBQWIsQ0FBWjtBQUNEO0FBSmMsT0FBakI7QUFNRDs7OztFQW5FMEIsZUFBS2lCLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBwYWdlczogW1xuICAgICAgICAncGFnZXMvaW5kZXgnLFxuICAgICAgICAncGFnZXMvZGV0YWlsJ1xuICAgICAgXSxcbiAgICAgIHdpbmRvdzoge1xuICAgICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflnLDkuLvnrpfotKYnLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXG4gICAgICB9LFxuICAgICAgdGFiQmFyOiB7XG4gICAgICAgIGxpc3Q6IFt7XG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9pbmRleCcsXG4gICAgICAgICAgdGV4dDogJ+a0u+WKqCdcbiAgICAgICAgfSwge1xuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvZGV0YWlsJyxcbiAgICAgICAgICB0ZXh0OiAn5piO57uGJ1xuICAgICAgICB9XVxuICAgICAgfVxuICAgIH1cblxuICAgIGdsb2JhbERhdGEgPSB7XG4gICAgICB1c2VySW5mbzogbnVsbCxcbiAgICAgIHRva2VuOiBudWxsXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpXG4gICAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXG4gICAgICB0aGlzLnVzZSgncHJvbWlzaWZ5JylcbiAgICB9XG5cbiAgICBvbkxhdW5jaCgpIHtcbiAgICAgIHdlcHkubG9naW4oKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKHJlcy5jb2RlKSB7XG4gICAgICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjgwODgvYXV0aC9sb2dpbicsXG4gICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBjb2RlOiByZXMuY29kZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHJlcy5kYXRhXG4gICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nbG9iYWxEYXRhLnRva2VuID0gcmVzdWx0LmRhdGFcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W55So5oi355m75b2V5oCB5aSx6LSl77yBJyArIHJlcy5lcnJNc2cpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfojrflj5bnlKjmiLfnmbvlvZXmgIHlpLHotKXvvIEnICsgcmVzLmVyck1zZylcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0VXNlckluZm8oY2FsbGJhY2spIHtcbiAgICAgIGlmICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1xuICAgICAgfVxuICAgICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICB0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhyZXMudXNlckluZm8pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=