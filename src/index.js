import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "lib-flexible"
import { HashRouter as Router } from 'react-router-dom'
import { LocaleProvider } from 'antd-mobile'
import enUS from 'antd-mobile/lib/locale-provider/en_US';
import { Provider } from 'react-redux'
import store from './store'

// console.log(store.getState())




ReactDOM.render(
    <LocaleProvider locale = {enUS}>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </LocaleProvider>,
    document.getElementById('root')
);
