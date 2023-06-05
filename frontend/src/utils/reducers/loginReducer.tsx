interface LoginState {
  isShown: boolean;
  emailValid: boolean;
  passwordValid: boolean;
  isFormValid: boolean;
}

type Action =
  | { type: 'TOGGLE_PASSWORD' }
  | { type: 'SET_EMAIL_VALID'; payload: boolean }
  | { type: 'SET_PASSWORD_VALID'; payload: boolean }
  | { type: 'SET_FORM_VALID'; payload: boolean };

export const initialState = {
  isShown: false,
  emailValid: false,
  passwordValid: false,
  isFormValid: false,
};

export const reducer = (state: LoginState, action: Action): LoginState => {
  switch (action.type) {
    case 'TOGGLE_PASSWORD':
      return { ...state, isShown: !state.isShown };
    case 'SET_EMAIL_VALID':
      return { ...state, emailValid: action.payload };
    case 'SET_PASSWORD_VALID':
      return { ...state, passwordValid: action.payload };
    case 'SET_FORM_VALID':
      return { ...state, isFormValid: action.payload };
    default:
      return state;
  }
};
