"use client"

import { useEffect, useState } from 'react';
import { Toast } from 'react-bootstrap';
import { MdError } from "react-icons/md";

const FormError = ({message}:{message?:string}) => {

  //const [show, setShow] = useState<boolean | undefined>(!!message);



  useEffect(() => {
    if(message){
     
      const timeout = setTimeout(() => {
       
      }, 8000);
      return () => clearTimeout(timeout);

    }
  }, [message]);

  if(!message ) return null;
 
  

  return (
    <Toast   className='toast-error'>
      <Toast.Header>
        <p><MdError size={24}/>{message}</p>
      </Toast.Header>
    </Toast>
  );
};

  
export default FormError