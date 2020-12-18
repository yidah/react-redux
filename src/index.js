import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    ctr:counterReducer,
    res:resultReducer

});

// store, next and action are functions executed by Redux
const logger = store =>{
    return next =>{
        return action => {
            // Here we add the code we want to execute between the action an the reducer
            console.log('Middleware dispatching action:', action);
            // thhis will let the action continue to the reducer, 
            // to succeed, we need to pass the action
            const result =next(action);
            console.log('Middleware next state', store.getState())
            return result;

        }
    }
}

// Line needed to use redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// apply middleware (or so called enhancer) by using and importing applyMiddleware
// thunk - redux middleware to dispatch async actions
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger,thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
