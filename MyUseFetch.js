import {useEffect, useState} from 'react';



export default function useFetch(url){
    const [fetchState, setFetchState] = useState({
      state: "idle",
      data: null,
      error: null,
    });


useEffect( function() {
 async function fetchData(){
try{
setFetchState((oldValue) => ({
    ...oldValue,
    state: "loading"
}));
const response = await fetch(url);
if (response.ok) {
  const json = await response.json();
  setFetchState({
    data: json,
    state: 'success',
    error: null
  })
} else {
    setFetchState({
        data: null,
        state: "error",
        error: new Error(response.statusText)
    });
}

 } catch (error) {
  setFetchState({
    data: null,
    state: 'error',
    error: error 
  })
  }
    }
 fetchData();

}, [url]);

return fetchState;
}