import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import loggerMiddleWare from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers/index';
import rootSaga from '../sagas';

const sagaMiddleWare = createSagaMiddleware();

const middleWares = [sagaMiddleWare, loggerMiddleWare];


const store = configureStore({
    reducer: reducers,
    middleware: [...getDefaultMiddleware({ thunk: false }), ...middleWares],
    devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleWare.run(rootSaga);

if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(reducers));
}

export default store;

