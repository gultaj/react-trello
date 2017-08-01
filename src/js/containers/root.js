import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import invariant from 'invariant';
import routes from '../routes';

export default class Root extends React.Component {
    _renderRouter() {
        invariant(
            this.props.routerHistory,
            '<Root /> needs either a routingContext or routerHistory to render'
        );

        return (
            <ConnectedRouter history={this.props.routerHistory}>
                {routes}
            </ConnectedRouter>
        );
    }

    render() {
        return (
            <Provider store={this.props.store}>
                {this._renderRouter()}
            </Provider>
        );
    }
}