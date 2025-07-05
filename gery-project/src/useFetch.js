import { useState, useEffect } from "react";


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abordConst = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abordConst.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error("Could not fetch the data for that resourse");
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((err) => {
                    if (err.name === "AbortError") {
                        console.log("fetch aborted");
                    } else {
                        setIsPending(false);
                        console.log(err.message);
                    }

                })
        }, 1000);

        return () => {
            abordConst.abort();
        }
    }, [url]);

    return { data, isPending, error }

}

export default useFetch;