import { useContext, useEffect, useMemo, useState } from 'react';
import { ScrollContext } from '../../context/ScrollContext';
import './contacto.css';

const stateInitial = {
    nombre: '',
    email: '',
    mensaje: ''
}

const errorsState = {
    nombre: '',
    email: '',
    mensaje: ''
}

export const Contacto = () => {


    const { contactoRef } = useContext(ScrollContext);

    const [formValid, setFormValid] = useState(true);
    const [state, setState] = useState(stateInitial);
    const [errors, setErrors] = useState(errorsState);

    const { nombre , email, mensaje } = state;
    const { nombre: errorNombre, email: errorEmail, mensaje: errorMensaje } = errors;

    const onChange = ({ target }) => {
        setState({
            ...state,
            [target.name]: target.value
        });
    }

    //Validar errores
    const blurValidation = ({ target }) => {
        if(target.value.trim() === ''){
            setErrors({
                ...errors,
                [target.name]: `El campo ${target.name} es obligatorio`
            });
        }else{
            setErrors({
                ...errors,
                [target.name]: ''
            });
        }
    }



        //Memorizamos los errores para que no se vuelvan a ejecutar
        useMemo(() => {
            if(Object.values(errors).every(error => error.trim() === '')){
                return true;
            }
    
            return false;
    
        },[errorNombre, errorEmail, errorMensaje]);


        console.log(formValid);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!formValid){
            return;
        }
       
        console.log('Enviando formulario');


    }

    //Funcion que agrega la clase de error si el campo esta vacio
    const errorActive = (error) => error ? 'form__error--active' : '';


  return (
    <section className='section-contacto section hidden' ref={contactoRef} id='contacto'>
        <div className='container'>
                <h2 className='section__title'>Contacto</h2>
                <form 
                    onSubmit={onSubmit}
                    className='form'>
                    <div className='form__group'>
                        <label htmlFor='name' className='form__label'>Nombre</label>
                        <input 
                            type='text'
                            onChange={onChange}
                            value={nombre}
                            onBlur={blurValidation}
                            className='form__input' 
                            name='nombre' 
                            placeholder='Nombre' />
                        {/* errror si no lo completa */}
                        <span className={`form__error ${errorActive(errors.nombre)}`}>{ errors.nombre }</span>
                    </div>
                    <div className='form__group'>
                        <label htmlFor='email' className='form__label'>Email</label>
                        <input 
                            type='email'
                            onChange={onChange} 
                            value={email} 
                            onBlur={blurValidation}
                            className='form__input' 
                            name='email'
                            id='email' 
                            placeholder='Email' />
                        <span className={`form__error ${errorActive(errors.email)}`}>{ errors.email }</span>
                    </div>
                    <div className='form__group'>
                        <label htmlFor='mensaje' className='form__label'>Mensaje</label>
                        <textarea 
                            name='mensaje'
                            id='mensaje' 
                            onChange={onChange}
                            value={mensaje}
                            onBlur={blurValidation}
                            className='form__input' 
                            placeholder='Mensaje'></textarea>
                        <span className={`form__error ${errorActive(errors.mensaje)}`}>{ errors.mensaje }</span>
                    </div>
                    <button 
                        className='form__button'
                        disabled={formValid}
                        >Enviar</button>
                </form>
        </div>

    </section>
  )
}
