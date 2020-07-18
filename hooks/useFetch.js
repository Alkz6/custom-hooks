import { useState, useEffect, useRef } from 'react';

export const useFetch = ( url ) => {

    const isMounted =  useRef(true);
    
    const [ state, setState ] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        return() => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {
        setState({ data: null, loading: true, error: null });
        fetch(url).then( response => {
            return response.json();
        }).then( data => {
            if (isMounted.current){
                setState({
                    loading: false,
                    error: null,
                    data
                });
            }else{
                console.log('setState no llamado');
            }
        }).catch( () => {
            setState({
                data: null,
                loading: false,
                error: 'No se pudo cargar la info'
            });
        });
    }, [ url ]);

    return state;
}