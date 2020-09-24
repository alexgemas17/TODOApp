import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, handleClickTodo, handleDelete }) => {
    return (
        <ul className='list-group list-group-flush'>
            {
                todos.map( (todo, index) => (
                    <TodoListItem 
                        key={index}
                        todo={todo} 
                        index={index}
                        handleClickTodo={handleClickTodo} 
                        handleDelete={handleDelete} 
                    />
                ))
            }
        </ul>
    )
}
