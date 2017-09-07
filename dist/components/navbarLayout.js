'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

var Toast = function (_wepy$component) {
  _inherits(Toast, _wepy$component);

  function Toast() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Toast);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toast.__proto__ || Object.getPrototypeOf(Toast)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      tabs: ['选项一', '选项二'],
      activeIndex: 0,
      sliderOffset: 0,
      sliderLeft: 0
    }, _this.methods = {
      tabClick: function tabClick(e) {
        this.sliderOffset = e.currentTarget.offsetLeft;
        this.activeIndex = e.currentTarget.id;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Toast, [{
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

  return Toast;
}(_wepy2.default.component);

exports.default = Toast;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhckxheW91dC5qcyJdLCJuYW1lcyI6WyJzbGlkZXJXaWR0aCIsIlRvYXN0IiwiZGF0YSIsInRhYnMiLCJhY3RpdmVJbmRleCIsInNsaWRlck9mZnNldCIsInNsaWRlckxlZnQiLCJtZXRob2RzIiwidGFiQ2xpY2siLCJlIiwiY3VycmVudFRhcmdldCIsIm9mZnNldExlZnQiLCJpZCIsImdldFN5c3RlbUluZm8iLCJyZXMiLCJ3aW5kb3dXaWR0aCIsImxlbmd0aCIsIiRhcHBseSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsY0FBYyxFQUFwQixDLENBQXdCOztJQUVIQyxLOzs7Ozs7Ozs7Ozs7OztvTEFFbkJDLEksR0FBTztBQUNMQyxZQUFNLENBQUMsS0FBRCxFQUFRLEtBQVIsQ0FERDtBQUVMQyxtQkFBYSxDQUZSO0FBR0xDLG9CQUFjLENBSFQ7QUFJTEMsa0JBQVk7QUFKUCxLLFFBT1BDLE8sR0FBVTtBQUNSQyxjQURRLG9CQUNDQyxDQURELEVBQ0k7QUFDVixhQUFLSixZQUFMLEdBQW9CSSxFQUFFQyxhQUFGLENBQWdCQyxVQUFwQztBQUNBLGFBQUtQLFdBQUwsR0FBbUJLLEVBQUVDLGFBQUYsQ0FBZ0JFLEVBQW5DO0FBQ0Q7QUFKTyxLOzs7Ozs7Ozs7Ozs7O3VCQVFRLGVBQUtDLGFBQUwsRTs7O0FBQVpDLG1COzs7QUFFSixxQkFBS1IsVUFBTCxHQUFrQixDQUFDUSxJQUFJQyxXQUFKLEdBQWtCLEtBQUtaLElBQUwsQ0FBVWEsTUFBNUIsR0FBcUNoQixXQUF0QyxJQUFxRCxDQUF2RTtBQUNBLHFCQUFLSyxZQUFMLEdBQW9CUyxJQUFJQyxXQUFKLEdBQWtCLEtBQUtaLElBQUwsQ0FBVWEsTUFBNUIsR0FBcUMsS0FBS1osV0FBOUQ7QUFDQSxxQkFBS2EsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXJCK0IsZUFBS0MsUzs7a0JBQW5CakIsSyIsImZpbGUiOiJuYXZiYXJMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbiAgY29uc3Qgc2xpZGVyV2lkdGggPSA5NjsgLy8g6ZyA6KaB6K6+572uc2xpZGVy55qE5a695bqm77yM55So5LqO6K6h566X5Lit6Ze05L2N572uXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9hc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG5cbiAgICBkYXRhID0ge1xuICAgICAgdGFiczogWyfpgInpobnkuIAnLCAn6YCJ6aG55LqMJ10sXG4gICAgICBhY3RpdmVJbmRleDogMCxcbiAgICAgIHNsaWRlck9mZnNldDogMCxcbiAgICAgIHNsaWRlckxlZnQ6IDBcbiAgICB9O1xuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRhYkNsaWNrKGUpIHtcbiAgICAgICAgdGhpcy5zbGlkZXJPZmZzZXQgPSBlLmN1cnJlbnRUYXJnZXQub2Zmc2V0TGVmdDtcbiAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IGUuY3VycmVudFRhcmdldC5pZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBvbkxvYWQoKSB7XG4gICAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5nZXRTeXN0ZW1JbmZvKCk7XG5cbiAgICAgIHRoaXMuc2xpZGVyTGVmdCA9IChyZXMud2luZG93V2lkdGggLyB0aGlzLnRhYnMubGVuZ3RoIC0gc2xpZGVyV2lkdGgpIC8gMjtcbiAgICAgIHRoaXMuc2xpZGVyT2Zmc2V0ID0gcmVzLndpbmRvd1dpZHRoIC8gdGhpcy50YWJzLmxlbmd0aCAqIHRoaXMuYWN0aXZlSW5kZXg7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cbiAgfVxuIl19