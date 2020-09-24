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

 export const todoReducer = ( state = [], action ) => {

    switch ( action.type ) {
        case 'add':
            return [...state, action.payload]

        case 'delete':
            return state.filter( todo => todo.id !== action.payload)

        case 'toggle':
            return state.map ( todo => (todo.id === action.payload ) ? { ...todo, done: !todo.done} : todo )
    
        // El default se llama cuando se inicializa
        default:
            return state;
    }
}