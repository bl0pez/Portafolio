import { useState } from "react";

const postFechApi = () => {

    const [state, setState] = useState({ msg: '', loading: false, error: null });

    const postData = async ({ nombre, email, mensaje }) => {

        console.log(nombre, email, mensaje);

        setState({ msg: '', loading: true, error: null });

        try {
            const response = await fetch(`${import.meta.env.VITE_URL_BACKEND}/send-email`, {
                method: 'POST',
                body: JSON.stringify({
                    name: nombre,
                    email: email,
                    message: mensaje
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            setState({ msg: data.msg, loading: false, error: null });
        } catch (error) {
            console.log(error.message);
            setState({ msg: 'Error al enviar el formulario', loading: false, error });
        }
    }


    return {
        // Variables
        ...state,
        // Funciones
        postData
    }

}


export {
    postFechApi
}