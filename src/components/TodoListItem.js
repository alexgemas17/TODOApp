import React from 'react'

export const TodoListItem = ({ todo, index, handleClickTodo, handleDelete }) => {
    return (
        <li
            key={todo.id}
            className='list-group-item'
        >
            <p 
                className={ `${ todo.done && 'complete' }` } // si es true, devuelve 'complete'
                onClick={ () => handleClickTodo(todo.id) }
            > 
                { index + 1 } { todo.desc } 
            </p>

            <button
                className='btn btn-danger'
                onClick={ () => handleDelete( todo.id ) }
            >
                Borrar
            </button>
        </li>
    )
}
