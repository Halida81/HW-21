// import { useState, useRef} from "react";

// const SimpleInput = (props) => {
//   const [enteredName, setEnteredName] = useState('')

// const formSubmitHandler = (e )=>{
//   e.preventDefault()

//   if(enteredName.trim() ===''){
//     setIsValid(true)
//   }
//   setIsValid(false)
// return
// const enteredInputName =  inputRef.current.value
//  }

//  const nameInputClasses= isValid ? 'form-control invalid' : 'form-control'

//   return (
//     <form onSubmit={formSubmitHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor='name'>Your Name</label>
//         <input  type='text' id='name' onChange={changeInputHandler} />
//       </div>
//       {isValid && <p>Name must not be empty</p> }
//       <div className="form-actions">
//         <button>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput; //VERSION_1

import React, { useState } from "react";
import { useInput } from "../utils/hooks/useInput";
const SimpleInput = (props) => {
  // alias
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurChangeHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurChangeHandler,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }
    console.log(enteredName);
  };
  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurChangeHandler}
        />
        {nameInputHasError && <p>Name must not be empty</p>}
        <div className={emailInputClasses}>
          <label htmlFor="name">Your email</label>
          <input
            type="text"
            id="name"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurChangeHandler}
          />
          {emailInputHasError && <p>email is wrong</p>}
        </div>
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};
export default SimpleInput;
