import BaseStore from 'fluxible/addons/BaseStore';
import RouteStore from './RouteStore';

class ApplicationStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.pageTitle = '';

        this.enjoyCoding = false;
        this.helloMessage = '';
    }

    handlePageTitle(currentRoute) {
        this.dispatcher.waitFor(RouteStore, () => {
            if (currentRoute && currentRoute.get('title')) {
                this.handleHelloMessage(currentRoute);

                this.pageTitle = currentRoute.get('title');
                this.emitChange();
            }
        });
    }

    handleHelloMessage(currentRoute) {
        var message = '';

        var routeName = currentRoute.get('name');
        var routeParams = currentRoute.get('params');

        if (routeName === 'hello') {
            message = routeParams.get('message') || '';

            message = decodeURIComponent(message);
        }

        this.helloMessage = message;
    }

    handleEnjoyCoding() {
        this.enjoyCoding = true;
        this.emitChange();
    }

    getPageTitle() {
        return this.pageTitle;
    }

    getEnjoyCoding() {
        return this.enjoyCoding;
    }

    getHelloMessage() {
        return this.helloMessage;
    }

    dehydrate() {
        return {
            pageTitle: this.pageTitle,
            enjoyCoding: this.enjoyCoding,
            helloMessage: this.helloMessage,
        };
    }
    rehydrate(state) {
        this.pageTitle = state.pageTitle;
        this.enjoyCoding = state.enjoyCoding;
        this.helloMessage = state.helloMessage;
    }
}

ApplicationStore.storeName = 'ApplicationStore';

ApplicationStore.handlers = {
    'NAVIGATE_SUCCESS': 'handlePageTitle',

    'ENJOY_CODING': 'handleEnjoyCoding',
};

export default ApplicationStore;
