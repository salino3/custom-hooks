import { useState } from "react";





export const UseCounter = (initialValue = 10) => {

  const [counter, setCounter] = useState(initialValue);
  const [first, setFirst] = useState(0);
  const [ejemplo, setEjemplo] = useState('')


  const increment = (
    setY: React.Dispatch<React.SetStateAction<number>>,
    x: number,
    value = 1
  ) => {
    setY(x + value);
  };

  const decrement = (
    setY: React.Dispatch<React.SetStateAction<number>>,
    x: number,
    value = 1
  ) => {
    setY(x - value);
  };

  const decrementUntill0 = (
    setY: React.Dispatch<React.SetStateAction<number>>,
    x: number,
    value = 1,
    ut0 = 0
  ) => {
    if (x === ut0) return;
    setY(x - value);
  };
  const reset = (
    setY: React.Dispatch<React.SetStateAction<number>>,
    value = 0
  ) => {
    setY(value);
  };

  return {
    ejemplo,
    setEjemplo,
    first,
    setFirst,
    //
    counter,
    setCounter,
    increment,
    decrementUntill0,
    decrement,
    reset,
  
  };
};
