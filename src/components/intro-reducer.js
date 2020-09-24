/**
 * REDUCER: Función que recibe un estado y una acción, y devuelve un nuevo estado
 * No puede:
 *              1. No debe llamar a otras funciones/effectos
 *              2. No debe realizar tareas asícronas
 *              3. Debe devolver un nuevo estado
 *              4. No debe llamar a "localStage" y ni a "sessionStage" por si ocurre algún fallo al guardar.
 *              5. No debe requerir más de una acción --> SOLO UNA.
 *              6. NO usar .push() porque modifica o muta el objeto, mejor el ...
 * 
 *  const somethingReducer = ( state, action ) => {
 *      return state;
 *  }
 * 
 */
// Estado inicial de la aplicación
const initialState = [{
    id: 1,
    todo: 'jugar al The Witcher 3',
    done: false
}]

// El reducer con las acción que puede hacer
const todoReducer = ( state = initialState, action) => {
    
    //Ponemos la interrogación para cuando el action sea nondefined
    if( action?.type === 'agregar'){
        return [...state, action.payload]
    }
    
    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Salir a comprar',
    done: false
}

// Es un estandar poner type y payload
const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}
todos = todoReducer( todos, agregarTodoAction )  

console.log(todos)