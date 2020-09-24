import React, { useReducer, useEffect } from 'react'
import { todoReducer } from  './todoReducer'

import './styles.css'
import { TodoList } from './TodoList'
import { TodoAddForm } from './TodoAddForm'

const init = () => {

    // Si exisaten todos guardados en el localStorage, devuelve esos todos. Sino, devuelve un estado inicial vacio
    // Esto se ejecuta al crear el TodoApp al inicializar el useReducer.
    return JSON.parse(localStorage.getItem('todos')) ||  []
}

export const TodoApp = () => {

    //const [state, dispatch] = useReducer(reducer, initialState, init)
    // reducer es el reducer creado; el init es una función que inicializa el estado cuando hay muchas cosas a tener en cuenta
    // el dispatch es el que va a disparar el redibujado cuando haya cambios en el state

    const [ todos, dispatch ] = useReducer(todoReducer, [], init)

    // Usamos el useEffect para controlar cuando cambian los todos. Cuando ocurra, guardaremos en el localStorage los todos
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleAddTodo = (newTodo) => {
        dispatch( {
            type:'add',
            payload: newTodo
        } )
    }

    const handleDelete = (todoId) => {

        // Especificamos la acción
        const action = {
            type:'delete',
            payload: todoId
        }

        // Usamos el dispatch para realizar la acción del reducer
        dispatch( action )
    }

    const handleClickTodo = (todoId) => {
        // Especificamos la acción
        const action = {
            type:'toggle',
            payload: todoId
        }

        // Usamos el dispatch para realizar la acción del reducer
        dispatch( action )
    }

    return (
        <div>
            <h1> TodosApp ( { todos.length } ) </h1>
            <hr/>

            <div className='row'>

                <div className='col-7' >
                    <TodoList 
                        todos={todos} 
                        handleClickTodo={handleClickTodo} 
                        handleDelete={handleDelete}  
                    />
                </div>

                <div className='col-5' >
                    <TodoAddForm 
                        handleAddTodo = { handleAddTodo }
                    />
                </div>

            </div>
        </div>
    )
}
