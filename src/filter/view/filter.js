import React from 'react'

import FilterLink from './container/FilterLink';
import {FilterTypes} from '../../constants';

export default ()=>(
    <div>
        <span>Show:</span>
        <FilterLink filter = {FilterTypes.ALL}>All:</FilterLink>
        <FilterLink filter = {FilterTypes.COMPLETED}>COMPLETED:</FilterLink>
        <FilterLink filter = {FilterTypes.UNCOMPLETED}>UNCOMPLETED:</FilterLink>
    </div>
)

