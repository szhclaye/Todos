import React from 'react'
import TodoItem from './TodoItem'
import { List } from 'antd'

const TodoList = ({ todos, onToggleTodo, onRemoveTodo }) => (
    <ul>
        {todos.map(item => (
            <TodoItem
                key={item.id}
                text={item.text}
                completed={item.completed}
                onToggle={() => onToggleTodo(item.id)}
                onRemove={() => onRemoveTodo(item.id)}
            />
        ))}
        <List
            header={<div>List</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={todos}
            renderItem={item => (
                <TodoItem
                    key={item.id}
                    text={item.text}
                    completed={item.completed}
                    onToggle={() => onToggleTodo(item.id)}
                    onRemove={() => onRemoveTodo(item.id)}
                />
            )}
        />
    </ul>
)

export default TodoList
