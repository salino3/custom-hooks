import { useState } from "react";



export const useForm = (initialForm = {}) => {

 const [formState, setFormState] = useState(initialForm);

 
  // const onChangeX = (setY, x, event) => {
  //   setY({ ...x, [event.target.name]: event.target.value });
  // };

 //
 const onInputChange = (setY, x,{ target }) => {
   const { name, value } = target;
   setY({
     ...x,
     [name]: value,
   });
 };

 const onResetForm = (setY,x) => {
  setY(x )
 }


  return {
    setFormState,
    //
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
}



