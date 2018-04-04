import React from 'react'

import TodoItem from './TodoItem';
const styles = {
    width:'100%',
    fontSize:'20px',
    border:'2px solid red',
    listStyle:'none',
    margin:'10px auto',
    padingLeft:'10px',
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start'
};

const TodoList = ({todos,onToggleTodo,onRemoveTodo})=>(
    <ul style={styles}>
        { todos.map(item =>(
            <TodoItem 
                key = {item.id}
                text = {item.text}
                completed = {item.completed}
                onToggle = {()=>onToggleTodo(item.id)}
                onRemove = {()=>onRemoveTodo(item.id)}
            />
        ))}
    </ul>
)

export default TodoList