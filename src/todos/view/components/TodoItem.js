import React from 'react'

const TodoItem = ({ onToggle, onRemove, text, completed }) => (
    <li 
        className="todoItem-li"
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
        <input
            type="checkbox"
            id="check-input"
            checked={completed ? 'checked' : ''}
            onClick={onToggle}
        />
        <label htmlFor="check-input">{text}</label>
        <button className="remove-button" onClick={onRemove}>
            X
        </button>
    </li>
)

export default TodoItem
