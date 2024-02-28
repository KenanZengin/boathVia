
const FormError = ({message}:{message?:string}) => {

    if(!message) return null;
  
    return (
      <div className="form-message">
        <p className="error">
            {message}
        </p>
      </div>
    )
  }
  
  export default FormError