const _import = require('./_import_' + process.env.NODE_ENV);

const home = _import("home/home");        // home

export default [
    {
        path: '/home/index',
        component: home
    }
]