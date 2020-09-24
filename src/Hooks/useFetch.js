import { useState, useEffect, useRef } from "react"

export const useFetch = ( url ) => {
    
    const [state, setState] = useState( {data: null, loading: true, error: null} )
    
    const isMounted = useRef(true)

    // Usamos este efecto para que al montarse, no haga nada; pero al desmontarse, cambie el estado de esa referencia
    // (recordar: puede cambiarse sin que haya que renderizar el componente), para así evitar que se ejecute el useState
    useEffect(() => {
        return () => {
            isMounted.current = false
        }
    }, [])

    useEffect(() => {
        
        setState( {data: null, loading: true, error: null} )

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                // Comprobamos si está montado el componente. De no ser así, tendremos un error gordo ya que
                // intentaría cambiar el estado a un componente que no existe; accediendo a zonas de memoria fatales.
                if(isMounted.current){
                    setState({
                        loading: false,
                        error: null,
                        data: data
                    })
                }
            } )

    }, [url])

    return state;
}
