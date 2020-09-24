import { useState } from "react"

// Recibirá un objeto que son los distintos campos que vamos a usar en el formulario
// Podemos meter tanta funcionalidad como queramos que tenga el formulario, como validar el texto, etc...
export const useForm = ( initialState = {} ) => {

    const [values, setValues] = useState(initialState)

    const reset = () => {
        setValues(initialState)
    }

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return [ values, handleInputChange, reset ]
}
