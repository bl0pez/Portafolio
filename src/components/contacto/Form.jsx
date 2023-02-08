export const Form = ({ onSubmit, onChange, blurValidation, formValid, nombre, email,  mensaje, nombreError, emailError, mensajeError, errorActive}) => {
    return (
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
                <span className={`form__error ${errorActive(nombreError)}`}>{nombreError}</span>
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
                <span className={`form__error ${errorActive(emailError)}`}>{emailError}</span>
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
                <span className={`form__error ${errorActive(mensajeError)}`}>{mensajeError}</span>
            </div>
            <button
                className='form__button'
                disabled={formValid}
            >Enviar</button>
        </form>
    )
}
