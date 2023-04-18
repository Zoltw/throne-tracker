import style from './Login.module.css';
import Input from '@components/Input/Input';
import Button from '@components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
const fetchUrl = 'http://localhost:8080/users/login';

export default function Login(): JSX.Element {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const [isShown, setIsSHown] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();

  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };

  useEffect(() => {
    setIsFormValid(emailValid && passwordValid);
  }, [
    emailValid,
    passwordValid,
  ]);

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
      if (!response.ok) throw response;
      console.log(response);
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
            correctValue={setEmailValid}
            type='email'
            name={'emailLog'}
            placeholder={'Address email'}
            required
            className={style.formElement} />
          <Input
            useRef={password}
            correctValue={setPasswordValid}
            type={isShown ? 'text' : 'password'}
            name={'passwordRegister'}
            placeholder={'Password'}
            required
            className={style.formElement} />
          <label className={style.checkboxLabel}>
            <input type="checkbox" checked={isShown} onChange={togglePassword} />
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
}

