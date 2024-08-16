import { useState, useEffect } from 'react';

const useFetch = (fetchFunction) => {
    const [res, setRes] = useState({
        data: [],
        error: null,
        loading: true
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchFunction();
                setRes({ data: data, error: null, loading: false });
            } catch (error) {
                setRes({ data: [], error: `Server error ${error.name}. Message: "${error.message}"`, loading: false });
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchData();
    }, [fetchFunction]);

    return res;
};

export default useFetch;