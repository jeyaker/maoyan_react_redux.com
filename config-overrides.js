const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

function pathResolve(val) {
    return path.join(__dirname, val);
}

module.exports = override(
    addWebpackAlias({
        '@': pathResolve('./src'),
        'actions': pathResolve('./src/actions'),
        'assets': pathResolve('./src/assets'),
        'components': pathResolve('./src/components'),
        'layout': pathResolve('./src/layout'),
        'pages': pathResolve('./src/pages'),
        'reducers': pathResolve('./src/reducers'),
        'store': pathResolve('./src/store'),
        'utils': pathResolve('./src/utils'),
    })
)