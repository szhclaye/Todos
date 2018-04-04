import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import {
    routerReducer,
    routerMiddleware,
} from 'react-router-redux' /** 引入react router */
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'

import { reducer as todoReducer } from './todos'
import { reducer as filterReducer } from './filter'
import { reducer as weatherReducer } from './weathers'

import Perf from 'react-addons-perf'

const win = window
win.Perf = Perf

const reducers = combineReducers({
    todos: todoReducer,
    visibilityFilter: filterReducer,
    weatherOfCity: weatherReducer,
    router: routerReducer,   // route
})
// state.todos   state.visibilityFilter
const history = createHistory()

const middlewares = [
    thunkMiddleware,
    loggerMiddleware,
    routerMiddleware(history)          //route中间件
];
/* thunkMiddleware要放在第一位 */
if (process.env.NODE_ENV !== 'production') {
    middlewares.push(require('redux-immutable-state-invariant')())
}

const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    win && win.devToolsExtension ? win.devToolsExtension() : f => f,  // Devtools
)

export default createStore(reducers, {}, storeEnhancers)
