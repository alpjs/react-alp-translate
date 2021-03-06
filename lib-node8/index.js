'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

const TranslateComponent = (_ref, { context }) => {
  let { id, children } = _ref,
      props = _objectWithoutProperties(_ref, ['id', 'children']);

  const translated = context.t(id, props);

  if (children) {
    return children(translated);
  }

  return translated;
};

TranslateComponent.contextTypes = {
  context: _propTypes2.default.object.isRequired
};

exports.default = TranslateComponent;
//# sourceMappingURL=index.js.map