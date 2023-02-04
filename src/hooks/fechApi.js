import { useEffect, useState } from 'react';

export const fechApi = (apiUrl, defaultFilter = 'all') => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(defaultFilter);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${apiUrl}`)
            .then((res) => res.json())
            .then(({data}) => {
                setData(data);
                setLoading(false);
            })
    }, [apiUrl])

    const filteredData = data.filter((item) => {
        if (filter === 'all') {
            return true;
        }
        return item.topics.includes(filter);
    });


    return {
        filteredData,
        setFilter,
        loading
    }

}
