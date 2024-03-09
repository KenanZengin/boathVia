"use client"

import { useEffect, useState } from 'react';
import { Toast } from 'react-bootstrap';
import { FaCheck } from "react-icons/fa6";
const FormSuccess = ({message}:{message?:string}) => {

  const [show, setShow] = useState<boolean | undefined>(!!message);



  useEffect(() => {
    if(message){
      setShow(true);
      const timeout = setTimeout(() => {
        setShow(false);
      }, 3000);
      return () => clearTimeout(timeout);

    }
  }, [message]);

  if(!message ) return null;
 
  const handleClose = () => setShow(false);

  return (
    <Toast onClose={handleClose} show={show} className='toast-success'>
      <Toast.Header>
        <p><FaCheck size={24}/>{message}</p>
      </Toast.Header>
    </Toast>
  );
};

  
export default FormSuccess