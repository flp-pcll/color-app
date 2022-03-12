import { useState, useEffect } from "react";

//Precisa receber um objeto de configuração para a requisição http {url, method} e uma callback para tratar os dados???
export const useHttp = (config) => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(config.url);
            const data = await response.json();
            return data;
        };

        getData()
            .then(infos => {
                setData(infos)
            })
            .catch(error => {
                setError(true)
            })
            .finally(() => setIsLoading(false))

    }, [config.url]);

    return { data, isLoading, error };
};