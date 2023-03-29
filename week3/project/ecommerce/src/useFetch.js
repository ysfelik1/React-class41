import { useState, useEffect } from 'react';
import ErrorPage from './/components/errorPage'
//check argument is just for TodayHolidays component
export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData);

            } catch (err) {
                setError(err.message);
                return (
                    <ErrorPage errorText={error} />
                );
            }
        };
        fetchData();
    }, [url, error]);
    return data;
}
