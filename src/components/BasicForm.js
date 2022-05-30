import {useEffect, useRef, useState} from 'react'

const BasicForm = () => {

  const[formIsValid,setFormIsValid] = useState(false)

const firstNameRef = useRef('')
const lastNameRef = useRef('')
const emailRef = useRef('')

const firstName = firstNameRef.current.value
const lastName = lastNameRef.current.value
const email = emailRef.current.value

// const allData = firstName && lastName && email

useEffect(() =>{
  if(firstName.trim() && lastName.trim() === ''  && email.trim() === '')
  setFormIsValid(true)
},[firstName,lastName,email])

const submitHandler = (e) =>{
  e.prevetDefault()
if(firstName.trim() === '' && lastName.trim() === '' && email.trim() === ''){
  setFormIsValid(true)
  return
}

setFormIsValid(false)
} 

const classes = formIsValid ? 'form-control invalid' : 'form-control'
  return (
    <form onSubmit={submitHandler}>
      <div className={classes}>
        <div className="form-control">
          <label htmlFor="firstName">First Name</label>
          <input ref={firstNameRef} id="fisrtName" type="text" />
          {formIsValid && <p>Please write at least 2 characters</p>}
        </div>
        <div className="form-control">
          <label htmlFor="firstName">Last Name</label>
          <input ref={lastNameRef} id="fisrtName" type="text" />
          {formIsValid && <p>Please write at least 4 characters</p>}

        </div>
        <div className="form-control">
          <label htmlFor="firstName">E-Mail Adress</label>
          <input ref={emailRef} id="fisrtName" type="text" />
          {formIsValid && <p>Please write @gmail</p>}

        </div>
        <div className="form-actions">
        <button disabled={!formIsValid} >Submit</button>
        </div>
      </div>
    </form>
  );
};
export default BasicForm;
