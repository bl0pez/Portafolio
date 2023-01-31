import { useState } from 'react';

const url = 'http://localhost:4000/api/github';

export const fechApi = () => {
 
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getApi = async() => {
        const resp = await fetch(url);
        const data = await resp.json();

        setData(data);
        setLoading(false);
    }


    return{
        //Propiedades
        data,
        loading,
        //Métodos
        getApi
    }

}
