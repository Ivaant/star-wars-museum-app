import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { mainMenuSwitcher } from './redux/reducers';
import App from './App';

const store = createStore(mainMenuSwitcher);

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));

