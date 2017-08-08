import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import invariant from 'invariant';
import routes from '../routes';

export default class Root extends React.Component {
    render() {
        const { routerHistory, store } = this.props;
        return (
            <Provider store={store}>
                <ConnectedRouter history={routerHistory}>
                    <div className="container">
                        {routes}
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}