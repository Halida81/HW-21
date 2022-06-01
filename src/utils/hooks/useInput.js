import { useReducer, useState } from "react";

const initState = {
  value: "",
  isBlur: false,
};

const inputReducer = (state, action) => { 
  switch (action.type) {
    case "CHANGE_VALUE":
      return {
        ...state,
        value: action.value,
        isBlur:true,
      };
    case "ON_BLUR":
      return {
        ...state,
        isBlur: action.isBlur,
      };

    default:
      return {
        ...state,
      };
  }
};
export function useInput(validateState) {
  const [state, dispatch] = useReducer(inputReducer, initState);

  const valueIsValid = validateState(state.value);
  const hasError = !valueIsValid && state.isBlur;

  const valueChangeHandler = (e) => {
    dispatch({ type: "CHANGE_VALUE", value: e.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "ON_BLUR", isBlur: true });
  };

  return {
    value: state.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
  };
}
