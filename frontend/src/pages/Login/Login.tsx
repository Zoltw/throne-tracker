import style from './Login.module.css';
import Input from '@components/Input/Input';
import Button from '@components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useReducer, useRef } from 'react';
const fetchUrl = `${import.meta.env.VITE_APP_BACKEND_URL}/users/login`;

const initialState = {
  isShown: false,
  emailValid: false,
  passwordValid: false,
  isFormValid: false,
};

interface State {
  isShown: boolean;
  emailValid: boolean;
  passwordValid: boolean;
  isFormValid: boolean;
}


const reducer = (state: State, action: { type: any; payload: any; }) => {
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

const Login: React.FC = (): JSX.Element => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const [state, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  const togglePassword = () => {
    dispatch({
      type: 'TOGGLE_PASSWORD',
      payload: undefined,
    });
  };

  useEffect(() => {
    dispatch({ type: 'SET_FORM_VALID', payload: state.emailValid && state.passwordValid });
  }, [state.emailValid, state.passwordValid]);

  const sendLoginRequest = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const body = {
      email: email.current?.value,
      password: password.current?.value,
    };
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    };


    try {
      const response = await fetch(fetchUrl, requestOptions);
      if (response.status === 401) console.log('dupa');
      if (!response.ok) throw response;
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={style.backgroundSign}>
      <section className={style.section}>
        <h1 className={style.title}>Sign in to Throne Tracker</h1>
        <form onSubmit={sendLoginRequest} className={style.form} name={'signup'}>
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
            type={state.isShown ? 'text' : 'password'}
            name={'passwordRegister'}
            placeholder={'Password'}
            required
            className={style.formElement} />
          <label className={style.checkboxLabel}>
            <input type="checkbox" checked={state.isShown} onChange={togglePassword} />
            <em>Show password?</em>
          </label>
          <div className={style.formOptions}>
            <Button text={'Sign in'} width={''} type={'submit'}/>
            <span>Already have an account? <Link to='/signup'>Sign up</Link></span>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
