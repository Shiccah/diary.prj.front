import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import createSagaMidelware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';
import { persistState } from 'redux-devtools';
import DevTools from './containers/DevTools'

const sagaMiddleware = createSagaMidelware();

const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    DevTools.instrument(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
);

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware), enhancer);

sagaMiddleware.run(rootSaga);

export default store;