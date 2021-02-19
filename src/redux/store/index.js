import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import multi from 'redux-multi';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers/index';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleWare = createSagaMiddleware();

const store = applyMiddleware(multi, sagaMiddleWare, promise)(createStore)(reducers, devTools);

export default store;
