import { useState, useRef} from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')

const formSubmitHandler = (e )=>{
  e.preventDefault()

  if(enteredName.trim() ===''){
    setIsValid(true)
  }
  setIsValid(false)
return
const enteredInputName =  inputRef.current.value
 }



 const nameInputClasses= isValid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={inputRef} type='text' id='name' onChange={changeInputHandler} value={enteredName}/>
      </div>
      {isValid && <p>Name must not be empty</p> }
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput; //VERSION_1
