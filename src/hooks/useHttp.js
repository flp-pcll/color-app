import { useState, useEffect } from "react";

/*
config object: {
    url,
    method,
    headers,
    body
}
*/

//Precisa receber um objeto de configuração para a requisição http {url, method} e uma callback para tratar os dados???
export const useHttp = (config) => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const getData = async () => {
            try {

                const response = await fetch(config.url);

                if(!response.ok) throw new Error(`${response.status} - ${response.statusText}`);

                return await response.json();

            } catch (error) {
                return error;
            }
        };

        getData()
            .then(infos => {
                setData(infos)
            })
            .catch(error => {
                setError(true);
                console.log('aloca do erro', error);
            })
            .finally(() => setIsLoading(false));

    }, [config.url]);

    return { data, isLoading, error };
};