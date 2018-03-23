import React from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../../actionsCreator'

const AddTodo = ({dispatch})=>{
    let input;
    return (
        <div>
            <form onSubmit={e=>{
                e.preventDefault();
                if(!input.value.trim()){
                    return
                }
                dispatch(addTodo(input.value));
                input.value = '';
                }}>
                <input placeholder='Input todos...'
                        ref={ node => input=node }/>
                <button type="submit">AddTodo</button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)

