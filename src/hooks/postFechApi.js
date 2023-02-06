import { useState } from "react";

const postFechApi = () => {

    const [state, setState] = useState({ msg: '', loading: false, error: null });

    const postData = async (campos) => {

        setState({ msg: '', loading: true, error: null });

        try {
            const response = await fetch(`${import.meta.env.VITE_URL_BACKEND}/send-email`, {
                method: 'POST',
                body: JSON.stringify({
                    name: campos.nombre,
                    email: campos.email,
                    message: campos.mensaje
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