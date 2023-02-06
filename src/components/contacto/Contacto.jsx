import { useContext, useEffect, useMemo, useState } from 'react';
import { ScrollContext } from '../../context/ScrollContext';
import { postFechApi } from '../../hooks/postFechApi';
import { useForm } from '../../hooks/useForm';
import './contacto.css';

const stateInitial = {
    nombre: '',
    email: '',
    mensaje: ''
}

const errorsState = {
    errorNombre: '',
    errorEmail: '',
    errorMensaje: ''
}

export const Contacto = () => {


    const { contactoRef } = useContext(ScrollContext);
    const { nombre, errorNombre, email, errorEmail,mensaje, errorMensaje, formValid, onChange, blurValidation} = useForm(stateInitial, errorsState);
    const { postData, loading, msg, error } = postFechApi();



    const onSubmit = (e) => {
        e.preventDefault();

        if(formValid){
            return;
        }
       
        postData(state);


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
                        <span className={`form__error ${errorActive(errorNombre)}`}>{ errorNombre }</span>
                    </div>
                    <div className='form__group'>
                        <label htmlFor='email' className='form__label'>Email</label>
                        <input 
                            type='email'
                            onChange={(e) => onChange(e)} 
                            value={email} 
                            onBlur={blurValidation}
                            className='form__input' 
                            name='email'
                            id='email' 
                            placeholder='Email' />
                        <span className={`form__error ${errorActive(errorEmail)}`}>{errorEmail }</span>
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
                        <span className={`form__error ${errorActive(errorMensaje)}`}>{ errorMensaje }</span>
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
