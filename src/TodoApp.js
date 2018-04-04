import React from 'react'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Link } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import { view as Todos } from './todos'
import { view as Filter } from './filter'
import { view as Weather } from './weathers';

const styles = {
    marginTop: '50px',
    fontSize: '40px',
    textAlign: 'center',
}
const history = createHistory()

const TodoApp = () => (
    <ConnectedRouter history={history}>
        <div>
            <h1 style={styles}>Todos</h1>
            <Todos />    
            <Filter />
            <Weather />
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/topics">Topic</Link>
                </li>
            </ul>
            <hr />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
        </div>
    </ConnectedRouter>
)
// Todos need changes

const Home = () => <div>Home</div>

const About = () => <div>About</div>

const Topics = () => <div>Topics</div>

export default TodoApp
