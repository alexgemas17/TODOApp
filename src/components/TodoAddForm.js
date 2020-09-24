import React from 'react'
import { useForm } from '../Hooks/useForm'

// Cada cosa que esté relacionado con el form, deberá estar implementado aquí. TodoApp no necesita saber sobre handleSubmit o handleInputChange
export const TodoAddForm = ({ handleAddTodo }) => {

    // Extraemos mediante desectructuración tanto la descripcion del formValue que nos devuelve, y el handleInputChange para cuando
    // se modifica. El reset lo usaremos para reinicar los valores cuando presionemos enter
    const [{description}, handleInputChange, reset] = useForm({
        description:''
    })

    // Con este handle, controlamos al hacer el enter de nuestro formulario.
    const handleSubmit = (event) => {
        event.preventDefault()

        if ( description.trim().length <= 1 )
            return;

        // Creamos el nuevo todo
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        // Mandamos el nuevo Todo al app padre para que use el dispatch y añada al reducer usando la acción de añadir
        handleAddTodo(newTodo)

        // Reiniciamos los valores del formulario
        reset()
    }

    return (
        <>
            <h4> Agregar TODO</h4>
            <hr/>

            <form onSubmit={ handleSubmit }>
                <input
                    type='text'
                    className='form-control'
                    name='description'
                    placeholder='Aprender ...'
                    value={description}
                    onChange={handleInputChange}
                />

                <button 
                    type='submit'
                    className='btn btn-outline-primary mt-1 btn-block'
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
