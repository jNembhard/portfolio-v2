const initialState = {
  fullname: { value: "", touched: false, hasError: false, error: "" },
  email: { value: "", touched: false, hasError: false, error: "" },
  message: { value: "", touched: false, hasError: false, error: "" },
  isFormValid: false,
};

const UPDATE_FORM = "UPDATE_FORM";
const RESET_FORM = "RESET_FORM";

const validateInput = (name, value) => {
  let hasError = false;
  let error = "";

  switch (name) {
    case "fullname":
      const fullnameRegEx = new RegExp(/^[a-zA-Z]+ [a-zA-Z]+$/);
      if (value.trim() === "") {
        hasError = true;
        error = "This field is required";
      } else if (!fullnameRegEx.test(value)) {
        hasError = true;
        error = "Please enter a first and last name";
      }
      break;

    case "email":
      const emailRegEx = new RegExp(
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
      );

      if (value.trim() === "") {
        hasError = true;
        error = "This field is required";
      } else if (!emailRegEx.test(value)) {
        hasError = true;
        error = "Enter a valid email address";
      }
      break;

    case "message":
      if (value.trim() === "") {
        hasError = true;
        error = "This field is required";
      }
      break;

    default:
      break;
  }
  return { hasError, error };
};

const onInputChange = (name, value, dispatch, formState) => {
  const { hasError, error } = validateInput(name, value);
  let isFormValid = true;

  for (const key in formState) {
    const item = formState[key];

    if (key === name && hasError) {
      isFormValid = false;
      break;
    } else if (key !== name && item.hasError) {
      isFormValid = false;
      break;
    }
  }

  dispatch({
    type: UPDATE_FORM,
    data: { name, value, hasError, error, touched: false, isFormValid },
  });
};

const onFocusOut = (name, value, dispatch, formState) => {
  const { hasError, error } = validateInput(name, value);
  let isFormValid = true;

  for (const key in formState) {
    const item = formState[key];

    if (key === name && hasError) {
      isFormValid = false;
      break;
    } else if (key !== name && item.hasError) {
      isFormValid = false;
      break;
    }
  }

  dispatch({
    type: UPDATE_FORM,
    data: { name, value, hasError, error, touched: true, isFormValid },
  });
};

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      const { name, value, hasError, error, touched, isFormValid } =
        action.data;
      return {
        ...state,
        [name]: { ...state[name], value, hasError, error, touched },
        isFormValid,
      };
    case RESET_FORM:
      return action.data;
    default:
      return state;
  }
};

export {
  initialState,
  validateInput,
  onInputChange,
  onFocusOut,
  formReducer,
  UPDATE_FORM,
  RESET_FORM,
};
