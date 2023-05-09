import style from './Signup.module.css';
import Input from '@components/Input/Input';
import Button from '@components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useReducer, useRef } from 'react';
const fetchUrl = `${import.meta.env.VITE_APP_BACKEND_URL}/users/register`;

const initialState = {
  isShown: false,
  emailValid: false,
  passwordValid: false,
  passwordConfirmationValid: false,
  tosChecked: false,
  isFormValid: false,
};

const reducer = (state: any, action: { type: any; payload: any; }) => {
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

const Signup = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const passwordConfirmation = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const togglePassword = () => {
    dispatch({ type: 'SET_IS_SHOWN', payload: !state.isShown });
  };

  useEffect(() => {
    dispatch({
      type: 'SET_IS_FORM_VALID',
      payload: state.emailValid && state.passwordValid && state.passwordConfirmationValid && state.tosChecked,
    });
  }, [
    state.emailValid,
    state.passwordValid,
    state.passwordConfirmationValid,
    state.tosChecked,
  ]);

  const sendRegisterRequest = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const body = {
      email: email.current?.value,
      password: password.current?.value,
      passwordConfirmation: passwordConfirmation.current?.value,
    };
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    };


    try {
      const response = await fetch(fetchUrl, requestOptions);
      if (!response.ok) throw response;
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={style.backgroundSign}>
      <section className={style.section}>
        <h1 className={style.title}>Sign up to Throne Tracker</h1>
        <form onSubmit={sendRegisterRequest} className={style.form} name={'signup'}>
          <Input
            useRef={email}
            correctValue={(value) => dispatch({ type: 'SET_EMAIL_VALID', payload: value })}
            type='email'
            name={'emailLog'}
            placeholder={'Address email'}
            required
            className={style.formElement} />
          <Input
            useRef={password}
            correctValue={(value) => dispatch({ type: 'SET_PASSWORD_VALID', payload: value })}
            sibling={passwordConfirmation}
            type={state.isShown ? 'text' : 'password'}
            name={'passwordRegister'}
            placeholder={'Password'}
            required
            className={style.formElement} />
          <Input
            useRef={passwordConfirmation}
            correctValue={(value) => dispatch({ type: 'SET_PASSWORD_CONFIRMATION_VALID', payload: value })}
            sibling={password}
            type={state.isShown ? 'text' : 'password'}
            name={'passwordRegisterRepeat'}
            placeholder={'Repeat your password'}
            required
            className={style.formElement} />
          <label className={style.checkboxLabel}>
            <input type="checkbox" checked={state.isShown} onChange={togglePassword} />
            <em>Show password?</em>
          </label>
          <label className={style.label}>
            <input
              type="checkbox"
              name="terms"
              value="terms"
              required={true}
              onChange={({ target }) => dispatch({ type: 'SET_TOS_CHECKED', payload: target.checked })} />
            <em>I agree to our privacy and terms of service.</em>
          </label>
          <div className={style.formOptions}>
            <Button text={'Sign up'} width={''} type={'submit'}/>
            <span>Already have an account? <Link to='/login'>Sign in</Link></span>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Signup;
