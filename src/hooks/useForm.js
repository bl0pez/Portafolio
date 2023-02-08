import { useEffect, useMemo, useState } from 'react';



export const useForm = (stateInitial = {}, errorsState = {}) => {

    const [formValid, setFormValid] = useState(true);
    const [states, setState] = useState(stateInitial);
    const [errors, setErrors] = useState(errorsState);

    //Inicializar el estado de los errores
    
    useMemo(() => {
        Object.values(states).forEach((value) => {
            if(value.trim() === ''){
                setFormValid(true);
            }else{
                setFormValid(false);
            }
        });
        
        
    },[states]);
    
    const onChange = ({ target }) => {
        setState({
            ...states,
            [target.name]: target.value
        });
    }

    const blurValidation = ({ target }) => {

        if(target.value.trim().length < 2){

            console.log(target.value.trim());

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
    
    return {
        // Variables
        ...states,
        ...errors,
        formValid,
        // Funciones
        onChange,
        blurValidation
    }


}