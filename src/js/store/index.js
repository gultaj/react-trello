import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import reducers from '../reducers';

const loggerMiddleware = createLogger({
    level: 'info',
    collapsed: true
});

export default function configureStore(history) {
    return createStore(
        reducers, 
        applyMiddleware(routerMiddleware(history), thunkMiddleware, loggerMiddleware)
    );
}