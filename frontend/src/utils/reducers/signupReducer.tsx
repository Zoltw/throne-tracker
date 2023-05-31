export const initialState = {
  isShown: false,
  emailValid: false,
  passwordValid: false,
  passwordConfirmationValid: false,
  tosChecked: false,
  isFormValid: false,
};

export interface State {
  isShown: boolean,
  emailValid: boolean,
  passwordValid: boolean,
  passwordConfirmationValid: boolean,
  tosChecked: boolean,
  isFormValid: boolean,
}

export const reducer = (state: State, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case 'SET_IS_SHOWN':
      return { ...state, isShown: action.payload };
    case 'SET_EMAIL_VALID':
      return { ...state, emailValid: action.payload };
    case 'SET_PASSWORD_VALID':
      return { ...state, passwordValid: action.payload };
    case 'SET_PASSWORD_CONFIRMATION_VALID':
      return { ...state, passwordConfirmationValid: action.payload };
    case 'SET_TOS_CHECKED':
      return { ...state, tosChecked: action.payload };
    case 'SET_IS_FORM_VALID':
      return { ...state, isFormValid: action.payload };
    default:
      return state;
  }
};
