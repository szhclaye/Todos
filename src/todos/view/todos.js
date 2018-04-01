import React from 'react'

import AddTodo from './container/AddTodo'
import VisibleTodoList from './container/VisibleTodoList'

export default  ()=>(
    <div>
        <AddTodo />
        <hr />
        <VisibleTodoList />
    </div>
)
