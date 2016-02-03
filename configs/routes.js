export default {
    home: {
        path: '/',
        method: 'get',
        page: 'home',
        title: 'Home',
        handler: require('../components/Home')
    },
    about: {
        path: '/about',
        method: 'get',
        page: 'about',
        title: 'About',
        handler: require('../components/About')
    },
    hello: {
        path: '/hello/:message?',
        method: 'get',
        page: 'hello',
        title: 'Hello',
        handler: require('../components/Hello')
    }
};
