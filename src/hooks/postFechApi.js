import { useMemo, useState } from "react";

const postFechApi = () => {

    // Creamos el estado
    const [state, setState] = useState({ msg: '', loading: false, error: false});

    // Funcion para enviar los datos del formulario
    const postData = async ({ name, email, message }) => {

        setState({ msg: '', loading: true, error: false });

        try {

            //Creamos la peticion
            const response = await fetch(`${import.meta.env.VITE_URL_BACKEND}/send-email`, {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    email,
                    message
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                setState({ msg: 'Error al enviar el formulario', loading: false, error: true });
                window.alert('Error al enviar el formulario');
                return;
            }

            // Obtenemos la respuesta
            const data = await response.json();

            window.alert(data.msg);


            // Mostramos el mensaje
            setState({ msg: "Formulario enviado :)", loading: false, error: false });

        } catch (error) {
            setState({ msg: 'Error al enviar el formulario', loading: false, error: true });
            window.alert('Error al enviar el formulario');

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