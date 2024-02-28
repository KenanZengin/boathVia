

const FormSuccess = ({message}:{message?:string}) => {

  if(!message) return null;

  return (
    <div className="form-message">
      <p className="success">
        {message}
      </p>
    </div>
  )
}

export default FormSuccess