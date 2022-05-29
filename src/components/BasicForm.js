import { useReducer, useEffect, useState } from "react";


const initState = {
  firstName:'',
      firstNameIsValid:null,
      lastName:'',
      lastNameIsValid:null,
      emailValue:'',
      emailIsValid:null,
}

const  inputReducer = (state,action)=>{
  if(action.type ==='NAME_CHANGE'){
    return{
      ...state,
      firstName:action.firstName,
      firstNameIsValid:action.firstName.trim().length > 2,
    }
  }
  if(action.type === 'LAST_NAME_CHANGE'){
    return{
      ...state,
      lastName:action.lastName,
      lastNameIsValid:action.lastName.trim().length > 3
    }
  }
  if(action.type === 'EMAIL_CHANGE'){
    return{
      ...state,
      emailValue:action.emailValue,
      emailIsValid:action.emailValue.includes('@')
    }
  }
  // if(action.type === "ON_BLUR"){
  //   return{
  //    ...state,
  // firstNameIsValid: state.firstName.trim().length > 2,
  // lastNameIsValid: state.lastName.trim().length > 3,
  // emailIsValid:   state.emailValue.includes('@'),
  //   }
  // }
    return{
     initState,
  }
    }
  
const BasicForm = () => {

const [state, dispatch] = useReducer( inputReducer, initState)
  
const [inputIsValid,setInputIsValid] = useState(false)

 useEffect(() =>{
   if(state.firstName.trim().length > 2 && state.lastName.trim().length > 3 && state.emailValue.includes('@'))
   setInputIsValid(true)
 },[state.firstName,state.lastName,state.emailValue])

 const firstNameChangehandler = (event) =>{
  dispatch({type:"NAME_CHANGE", firstName:event.target.value})
}

const lastNameChangehandler = (event) =>{
  dispatch({type:"LAST_NAME_CHANGE", lastName:event.target.value})
}
const emailChangehandler = (event) =>{
  dispatch({type:"EMAIL_CHANGE", emailValue:event.target.value})
}

  const submitHandler = (e) =>{
      e.preventDefault()
      console.log(state.firstName);
      console.log(state.lastName);
      console.log(state.emailValue);
    }
   

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={state.firstNameIsValid === false ? ['form-control invalid'] : 'form-control'}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={firstNameChangehandler}
           />
         
        </div>
        <div className={state.lastNameIsValid === false ? ['form-control invalid'] : 'form-control'}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={lastNameChangehandler} 
          />
         
    </div>
      </div>
      <div className={state.emailIsValid === false ? ['form-control invalid'] : 'form-control'}>
        <label htmlFor='name'>Address</label>
        <input type='text' id='name'onChange={emailChangehandler} 
        />
       
      </div>
      <div className='form-actions'>
        <button disabled={!inputIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
