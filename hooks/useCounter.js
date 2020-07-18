import { useState } from 'react';

export const useCounter = (initalState = 10) => {
    
    const [ state, setState ] = useState(initalState);
    const [ error, setError ] = useState(false);

    const increment = ({event = null, factor = 1}) => {
        setError(false);
        setState((prevState) =>  prevState + factor);
    }

    const decrement = ({event, factor = 1}) => {
        setState((prevState) => {
            if (prevState <= 1){
                setError(true);
                return prevState;
            }
            return prevState - factor;
        });
    }

    const reset = () => {
        setState(initalState);
    }

    return {
        state,
        increment,
        decrement,
        error,
        reset
    }
}