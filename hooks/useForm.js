import { useState } from 'react';

export const useForm = ( initialState = {} ) => {

    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }

    const hanldeInputChange = ({ target }) => {
        setValues(prevState => {
            return {
               ...prevState,
             [ target.name ]: target.value
            }
        });
    }

    return [
        values, hanldeInputChange, reset
    ]

}
