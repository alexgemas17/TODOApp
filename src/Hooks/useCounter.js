//Es una función simple que hace cosas

import { useState } from 'react'

export const useCounter = ( initialState = 10 ) => {

    const [counter, setCounter] = useState(initialState) // 10

    //const increment = (value = 1) => {
    //    setstate( state + value)
    //}

    //const decrement = (value = 1) =>{
    //    setstate( state - value)
    //}

    const increment = () => {
        setCounter( counter + 1)
    }

    const decrement = () =>{
        setCounter( counter - 1)
    }

    const reset = () => {
        setCounter(initialState)
    }

    // Devolvemos objetos o arrays según nos veamos.
    return {
        counter,
        increment,
        decrement,
        reset
    }
}
