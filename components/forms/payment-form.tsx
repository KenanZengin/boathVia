"use client"

import { useState } from "react"
import { PaymentSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import Modal from 'react-bootstrap/Modal';
import CardForm from "./credit-card-form"


import { IoMdClose } from "react-icons/io";

const PaymentForm = () => {

    const [show, setShow] = useState(false);

    const {handleSubmit, register, formState:{errors,isValid}} = useForm<z.infer<typeof PaymentSchema>>({
        resolver: zodResolver(PaymentSchema),
        defaultValues:{
            accepted: false
        },
    });

    const handleShow  = () => setShow(() => true);

    const handleClose = () => setShow(() => false);


  return (
    <div className="payment-forms">
        <form  onSubmit={handleSubmit(handleShow)}>
            <div className="payment-right">
                <input type="checkbox"  id="accepted" {...register("accepted")} />
                <label htmlFor="accepted">
                By selecting this box, you will be accepting preliminary information form and distance selling contract 
                </label>
            </div>
            <button type="submit" className={`${!isValid ? "not-ok" : "ok"}`} disabled={!isValid}>Pay Now</button>
        </form>
        <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        className="card-modal"
        animation={false}
      >
            <div className="close-model">
                <button onClick={handleClose}>
                    <IoMdClose size={25} />
                </button>
            </div> 
            <div className="modal-wrapper">      
                    <div className="payment-options">
                            <div className="card-option">
                                <div className="option-info">
                                    <p>Card Payment</p>
                                    <span>Credit or Debir cards All banks worldwide</span>
                                </div>
                                <div className="total-price">Total Payment Amount: <span> 31200,00 TL</span></div>
                                <CardForm />
                            </div>
                    </div>   
            </div>
       </Modal>
    </div>
  )
}

export default PaymentForm