import React from 'react'
import { connect } from 'react-redux'
import styles from './addTodo.css'

import { addTodo } from '../../actionsCreator'

const AddTodo = ({ dispatch }) => {
    let input
    return (
        <div className={styles.input_container}>
            <div className={styles.form_group}>
                <input
                    type="input"
                    id={'input—label'}
                    className={styles.input_i}
                    placeholder="输入待办事项.."
                    ref={node => (input = node)}
                />
                <label htmlFor="input—label">输入待办事项..</label>
                {/* label必须放在input之后 ，label和input通过htmlFor和id联动*/}
                <div className={styles.bottom_line} />
            </div>
            <button
                type="submit"
                className={styles.submit_button}
                onClick={e => {
                    // e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value))
                    input.value = ''
                }}
            >
                添加
            </button>
        </div>
    )
}

export default connect()(AddTodo)
