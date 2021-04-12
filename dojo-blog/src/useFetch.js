import { useState, useEffect } from 'react';

// Custom hook that makes fetch requests
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  /* Function that runs every time the component renders
    Second argument is called "dependency array".
      - If empty, the function only runs on the first render
      - If [name], it will run when the variable (hook) "name" changes
  */
  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then(res => {
          if (!res.ok) throw Error("could not fetch data for the resource");
          return res.json();
        })
        .then(data => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          if(err.name === "AbortError") {
            console.log("Fetch aborted");
            return;
          }
          setIsPending(false);
          setError(err.message);
        });
    }, 500);

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
}

export default useFetch;