
import { CardSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import Image from "next/image"

import cardService from "../../public/img/basic/cards.png"
import { MdError } from "react-icons/md";

const CardForm = ({children}:{children?:React.ReactNode}) => {


  const {handleSubmit, register, formState:{isValid,errors}} = useForm<z.infer<typeof CardSchema>>({
    resolver: zodResolver(CardSchema),
    
  })


  
  
     
  const onSubmit = (values:z.infer<typeof CardSchema>) => {

    console.log(values);
      
  }

  const test = errors.cardCvv || errors.cardMonth || errors.cardName ||errors.cardNumber || errors.cardYear;

  




  const handleCardNumberInput = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const formattedValue = target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ');

    if (target.value.length > 19) {
      return target.value = target.value.slice(0, 19);
    }

    return target.value = formattedValue.replace(/ \s*$/g, '');
  };
  
  const handleDigitInput = (event: React.ChangeEvent<HTMLInputElement>  ,maxLength:number) => {
    const { target } = event;
    const value = target.value.replace(/\D/g, ''); 
    
  
    if (value.length > maxLength) {
     return  target.value = value.slice(0, maxLength);
    }
  
    return target.value = value;
  };


  return (
    <div className="card-form">
      {children}
      <form  onSubmit={handleSubmit(onSubmit)}>
        <div className="card-name">
          <label htmlFor="cardname">
            <span>Cardholder Name, Surname:</span>
            <input 
              type="text" 
              id="cardname" 
              className={`${errors.cardName ? "error-input" : "success-input"}`}
              {...register("cardName")} 
            />
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
                className={`${errors.cardNumber ? "error-input" : "success-input"}`}
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
                placeholder="Month"
                className={`${errors.cardMonth ? "error-input" : "success-input"}`}
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
                placeholder="Year"
                className={`${errors.cardYear ? "error-input" : "success-input"}`}
                maxLength={2} 
                {...register("cardYear")} 
                onInput={(event: React.ChangeEvent<HTMLInputElement> ) => handleDigitInput(event,2)}
              />

            </label>
          </div>
          <div className="card-cvv">
            <label htmlFor="cardcvv">
              <span>CVV/CVV2</span>
              <input 
                type="text" 
                id="cardcvv" 
                maxLength={3}
                className={`${errors.cardCvv ? "error-input" : "success-input"}`}
                {...register("cardCvv")} 
                onInput={(event: React.ChangeEvent<HTMLInputElement> ) => handleDigitInput(event,3)}
              />
            </label>
          </div>
        </div>
        <button type="submit" className="ok"  >
          Pay Now
        </button>
        {test &&  <div className="form-message">
            <div className="form-message-content error">
                <p> <MdError size={24}/>You must fill in your credit card information completely.</p>
            </div>
        </div>}
      </form>
      
      
      <div className="card-services-img">
          <Image src={cardService} alt="cards" />
        </div>
    </div>
  )
}

export default CardForm