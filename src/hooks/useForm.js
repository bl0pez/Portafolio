import { useEffect, useMemo, useState } from 'react';



export const useForm = (stateInitial = {}, errorsState = {}) => {
    const [states, setState] = useState(stateInitial);
    const [errors, setErrors] = useState(errorsState);
    
    const onChange = ({ target }) => {
        setState({
            ...states,
            [target.name]: target.value
        });
    }

    const blurValidation = ({ target }) => {

        if(target.value.trim().length < 2){
            setErrors({
                ...errors,
                [`${target.name}Error`]: `El campo ${target.name} es obligatorio`
            });
        }else{
            setErrors({
                ...errors,
                [`${target.name}Error`]: ''
            });
        }

    }

    //Resetear el formulario
    const resetForm = () => {
        setState(stateInitial);
        setErrors(errorsState);
    }

    return {
        // Variables
        ...states,
        ...errors,
        // Funciones
        onChange,
        blurValidation,
        resetForm
    }


}