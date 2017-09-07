'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      tabs: ['明细', '结算'],
      activeIndex: 0,
      sliderOffset: 0,
      sliderLeft: 0,
      sideLeft: false,
      sideRight: false
    }, _this.methods = {
      tabClick: function tabClick(e) {
        this.sliderOffset = e.currentTarget.offsetLeft;
        this.activeIndex = e.currentTarget.id;
      },
      sideLeftToggle: function sideLeftToggle() {
        if (this.sideLeft) {
          this.sideLeft = false;
        } else {
          this.sideLeft = true;
        }
      },
      sideRightToggle: function sideRightToggle() {
        if (this.sideRight) {
          this.sideRight = false;
        } else {
          this.sideRight = true;
        }
      },
      sidebarClose: function sidebarClose() {
        if (this.sideLeft || this.sideRight) {
          this.sideLeft = false;
          this.sideRight = false;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _wepy2.default.getSystemInfo();

              case 2:
                res = _context.sent;


                this.sliderLeft = (res.windowWidth / this.tabs.length - sliderWidth) / 2;
                this.sliderOffset = res.windowWidth / this.tabs.length * this.activeIndex;
                this.$apply();

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInNsaWRlcldpZHRoIiwiSW5kZXgiLCJkYXRhIiwidGFicyIsImFjdGl2ZUluZGV4Iiwic2xpZGVyT2Zmc2V0Iiwic2xpZGVyTGVmdCIsInNpZGVMZWZ0Iiwic2lkZVJpZ2h0IiwibWV0aG9kcyIsInRhYkNsaWNrIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJvZmZzZXRMZWZ0IiwiaWQiLCJzaWRlTGVmdFRvZ2dsZSIsInNpZGVSaWdodFRvZ2dsZSIsInNpZGViYXJDbG9zZSIsImdldFN5c3RlbUluZm8iLCJyZXMiLCJ3aW5kb3dXaWR0aCIsImxlbmd0aCIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGNBQWMsRUFBcEIsQyxDQUF3Qjs7SUFFSEMsSzs7Ozs7Ozs7Ozs7Ozs7b0xBRW5CQyxJLEdBQU87QUFDTEMsWUFBTSxDQUFDLElBQUQsRUFBTyxJQUFQLENBREQ7QUFFTEMsbUJBQWEsQ0FGUjtBQUdMQyxvQkFBYyxDQUhUO0FBSUxDLGtCQUFZLENBSlA7QUFLTEMsZ0JBQVMsS0FMSjtBQU1MQyxpQkFBVTtBQU5MLEssUUFTUEMsTyxHQUFVO0FBQ1JDLGNBRFEsb0JBQ0NDLENBREQsRUFDSTtBQUNWLGFBQUtOLFlBQUwsR0FBb0JNLEVBQUVDLGFBQUYsQ0FBZ0JDLFVBQXBDO0FBQ0EsYUFBS1QsV0FBTCxHQUFtQk8sRUFBRUMsYUFBRixDQUFnQkUsRUFBbkM7QUFDRCxPQUpPO0FBS1JDLG9CQUxRLDRCQUtTO0FBQ2YsWUFBRyxLQUFLUixRQUFSLEVBQWlCO0FBQ2YsZUFBS0EsUUFBTCxHQUFnQixLQUFoQjtBQUNELFNBRkQsTUFFTztBQUNMLGVBQUtBLFFBQUwsR0FBaUIsSUFBakI7QUFDRDtBQUNGLE9BWE87QUFZUlMscUJBWlEsNkJBWVU7QUFDaEIsWUFBRyxLQUFLUixTQUFSLEVBQWtCO0FBQ2hCLGVBQUtBLFNBQUwsR0FBaUIsS0FBakI7QUFDRCxTQUZELE1BRU87QUFDTCxlQUFLQSxTQUFMLEdBQWtCLElBQWxCO0FBQ0Q7QUFDRixPQWxCTztBQW1CUlMsa0JBbkJRLDBCQW1CTTtBQUNiLFlBQUcsS0FBS1YsUUFBTCxJQUFpQixLQUFLQyxTQUF6QixFQUFvQztBQUNqQyxlQUFLRCxRQUFMLEdBQWMsS0FBZDtBQUNELGVBQUtDLFNBQUwsR0FBZSxLQUFmO0FBQ0E7QUFDRjtBQXhCTyxLOzs7Ozs7Ozs7Ozs7O3VCQTRCUSxlQUFLVSxhQUFMLEU7OztBQUFaQyxtQjs7O0FBRUoscUJBQUtiLFVBQUwsR0FBa0IsQ0FBQ2EsSUFBSUMsV0FBSixHQUFrQixLQUFLakIsSUFBTCxDQUFVa0IsTUFBNUIsR0FBcUNyQixXQUF0QyxJQUFxRCxDQUF2RTtBQUNBLHFCQUFLSyxZQUFMLEdBQW9CYyxJQUFJQyxXQUFKLEdBQWtCLEtBQUtqQixJQUFMLENBQVVrQixNQUE1QixHQUFxQyxLQUFLakIsV0FBOUQ7QUFDQSxxQkFBS2tCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEzQytCLGVBQUtDLEk7O2tCQUFuQnRCLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbiAgY29uc3Qgc2xpZGVyV2lkdGggPSA5NjsgLy8g6ZyA6KaB6K6+572uc2xpZGVy55qE5a695bqm77yM55So5LqO6K6h566X5Lit6Ze05L2N572uXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuXG4gICAgZGF0YSA9IHtcbiAgICAgIHRhYnM6IFsn5piO57uGJywgJ+e7k+eulyddLFxuICAgICAgYWN0aXZlSW5kZXg6IDAsXG4gICAgICBzbGlkZXJPZmZzZXQ6IDAsXG4gICAgICBzbGlkZXJMZWZ0OiAwLFxuICAgICAgc2lkZUxlZnQ6ZmFsc2UsXG4gICAgICBzaWRlUmlnaHQ6ZmFsc2VcbiAgICB9O1xuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRhYkNsaWNrKGUpIHtcbiAgICAgICAgdGhpcy5zbGlkZXJPZmZzZXQgPSBlLmN1cnJlbnRUYXJnZXQub2Zmc2V0TGVmdDtcbiAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IGUuY3VycmVudFRhcmdldC5pZDtcbiAgICAgIH0sXG4gICAgICBzaWRlTGVmdFRvZ2dsZSgpIHtcbiAgICAgICAgaWYodGhpcy5zaWRlTGVmdCl7XG4gICAgICAgICAgdGhpcy5zaWRlTGVmdCA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zaWRlTGVmdCA9ICB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzaWRlUmlnaHRUb2dnbGUoKSB7XG4gICAgICAgIGlmKHRoaXMuc2lkZVJpZ2h0KXtcbiAgICAgICAgICB0aGlzLnNpZGVSaWdodCA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zaWRlUmlnaHQgPSAgdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2lkZWJhckNsb3NlKCl7XG4gICAgICAgaWYodGhpcy5zaWRlTGVmdCB8fCB0aGlzLnNpZGVSaWdodCkge1xuICAgICAgICAgIHRoaXMuc2lkZUxlZnQ9ZmFsc2VcbiAgICAgICAgIHRoaXMuc2lkZVJpZ2h0PWZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBvbkxvYWQoKSB7XG4gICAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5nZXRTeXN0ZW1JbmZvKCk7XG5cbiAgICAgIHRoaXMuc2xpZGVyTGVmdCA9IChyZXMud2luZG93V2lkdGggLyB0aGlzLnRhYnMubGVuZ3RoIC0gc2xpZGVyV2lkdGgpIC8gMjtcbiAgICAgIHRoaXMuc2xpZGVyT2Zmc2V0ID0gcmVzLndpbmRvd1dpZHRoIC8gdGhpcy50YWJzLmxlbmd0aCAqIHRoaXMuYWN0aXZlSW5kZXg7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cbiAgfVxuIl19