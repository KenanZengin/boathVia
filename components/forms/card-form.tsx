
import React from "react"
import { CardSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"


const CardForm = ({children}:{children?:React.ReactNode}) => {

  const {handleSubmit, register, formState:{isValid,errors}} = useForm<z.infer<typeof CardSchema>>({
    resolver: zodResolver(CardSchema),
    defaultValues:{
        cardName: undefined ,
        cardMonth: undefined,
        cardYear: undefined,
        cardCvv: undefined
    }
  })
     
  const onSubmit = (values:z.infer<typeof CardSchema>) => {

    console.log(values);
    
  }

  const handleCardNumberInput = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const formattedValue = target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 '); // Boşluk eklendi

    if (target.value.length > 16) {
      target.value = target.value.slice(0, 16);
    }

    target.value = formattedValue.replace(/ \s*$/g, '');
  };
  
  const handleDigitInput = (event: React.ChangeEvent<HTMLInputElement>  ,maxLength:number) => {
    const { target } = event;
    const value = target.value.replace(/\D/g, ''); // Sadece sayıları kabul et
    console.log(value.length,maxLength);
    
  
    // Maksimum 2 karaktere sınırla
    if (value.length > maxLength) {
     return  target.value = value.slice(0, maxLength);
    }
  
    // Değeri güncelle
    return target.value = value;
  };


  return (
    <div className="cardform">
      {children}
      <form className="card-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="card-name">
          <label htmlFor="cardname">
            <span>Cardholder Name, Surname:</span>
            <input type="text" id="cardname" {...register("cardName")} />
          </label>
        </div>
        <div className="card-numbers">
          <div className="card-number">
            <label htmlFor="cardnumber">
              <span>Card Number:</span>
              <input 
                type="text"
                maxLength={19} 
                id="cardnumber" 
                {...register("cardNumber")}
                onInput={handleCardNumberInput} 
              />
            </label>
           
          </div>
          <div className="card-month">
            <label htmlFor="cardmonth">
              <span>Expiration Date:</span>
              <input 
                type="text" 
                id="cardmonth" 
                maxLength={2} 
                {...register("cardMonth")} 
                onInput={(event: React.ChangeEvent<HTMLInputElement> ) => handleDigitInput(event,2)}
              />
            </label>
          </div>
          <div className="card-year">
            <label htmlFor="cardyear">
              <input 
                type="text" 
                id="cardyear" 
                maxLength={2} 
                {...register("cardYear")} 
                onInput={(event: React.ChangeEvent<HTMLInputElement> ) => handleDigitInput(event,2)}
              />
            </label>
          </div>
          <div className="card-cvv">
            <label htmlFor="cvv">
              <span>CVV/CVV2</span>
              <input 
                type="text" 
                id="cardcvv" 
                maxLength={3}
                {...register("cardCvv")} 
                onInput={(event: React.ChangeEvent<HTMLInputElement> ) => handleDigitInput(event,3)}

              />
            </label>
          </div>
          <button type="submit">
            Pay Now
          </button>
          <h1>
          cardCvv:{errors.cardCvv?.message} <br/>
          cardMonth:{errors.cardMonth?.message}<br/>
          cardName:  {errors.cardName?.message}<br/>
          cardNumber{errors.cardNumber?.message}<br/>
          cardYear:{errors.cardYear?.message}<br/>
          </h1>
        </div>
      </form>
    </div>
  )
}

export default CardForm