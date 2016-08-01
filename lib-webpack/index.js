import React from 'react';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import { PropTypes } from 'react';

TranslateComponent.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.func
};

TranslateComponent.contextTypes = {
    context: PropTypes.object.isRequired
};

export default function TranslateComponent(_ref, _ref2) {
    var id = _ref.id;
    var children = _ref.children;

    var props = _objectWithoutProperties(_ref, ['id', 'children']);

    var context = _ref2.context;

    var translated = context.t(id, props);

    if (children) {
        return children(translated);
    }

    return React.createElement(
        'span',
        null,
        translated
    );
}
//# sourceMappingURL=index.js.map