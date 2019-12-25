import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { appStateSwitcher } from './redux/reducers';
import App from './App';

const logger = createLogger();
const store = createStore(appStateSwitcher, applyMiddleware(logger));

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));

