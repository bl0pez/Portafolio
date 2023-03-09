import { useContext, useEffect, useMemo, useState } from 'react';
import { ScrollContext } from '../../context/ScrollContext';
import { postFechApi } from '../../hooks/postFechApi';
import { useForm } from '../../hooks/useForm';
import './contacto.css';
import { Form } from './Form';
import { Spinner } from './spinner';

const stateInitial = {
    nombre: '',
    email: '',
    mensaje: ''
}

const errorsState = {
    nombreError: '',
    emailError: '',
    mensajeError: ''
}

export const Contacto = () => {


    const { contactoRef } = useContext(ScrollContext);
    const { nombre, nombreError, email, emailError, mensaje, mensajeError, formValid, onChange, blurValidation, resetForm } = useForm(stateInitial, errorsState);
    const { postData, loading, msg, error } = postFechApi();



    const onSubmit = (e) => {
        e.preventDefault();

        if(nombre.trim().length < 2 || email.trim().length < 2 || mensaje.trim().length < 2) {
            return;
        }

        postData({ name:nombre, email, message:mensaje });


    }


    //Funcion que agrega la clase de error si el campo esta vacio
    const errorActive = (error) => error ? 'form__error--active' : '';


    return (
        <section className='section-contacto section hidden' ref={contactoRef} id='contacto'>
            <div className='container'>
                <h2 className='section__title'>Contacto</h2>
                {
                    loading
                        ? <Spinner />
                        : <Form
                        onSubmit={onSubmit}
                        onChange={onChange}
                        blurValidation={blurValidation}
                        nombre={nombre}
                        email={email}
                        mensaje={mensaje}
                        nombreError={nombreError}
                        emailError={emailError}
                        mensajeError={mensajeError}
                        errorActive={errorActive}
                    />
                }

            </div>

        </section>
    )
}
