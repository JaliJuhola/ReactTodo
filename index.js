import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from "../src/Root";
import {createStore} from 'redux';
const allReducers = require('./reduxIndex').default;
import {Provider} from 'react-redux';
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom';
let store = createStore(allReducers);
ReactDOM.render((
    <Provider store={store}>
            <HashRouter>
                <div>
                    <Route path="/" component={Root}/>
                </div>
            </HashRouter>
    </Provider>
    ),
    document.getElementById('root')
);
