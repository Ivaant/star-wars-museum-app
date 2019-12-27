import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { appStateSwitcher, requestMenu, requestItemsList } from './redux/reducers';
import App from './App';

const rootReducer = combineReducers({appStateSwitcher, requestMenu, requestItemsList});
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));

