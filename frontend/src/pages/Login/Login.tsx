import style from './Login.module.css';
import Input from '@components/Input/Input';
import Button from '@components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

export default function Login(): JSX.Element {
  const [isShown, setIsSHown] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };

  const email = useRef(null);
  const password = useRef(null);

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(emailValid && passwordValid);
  }, [
    emailValid,
    passwordValid,
  ]);

  return (
    <div className={style.backgroundSign}>
      <section className={style.section}>
        <h1 className={style.title}>Sign in to Throne Tracker</h1>
        <form method="post" action="#" className={style.form} name={'signup'}>
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
            // sibling={passwordConfirmation}
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
            <Button text={'Sign in'} width={''} />
            <span>Already have an account? <Link to='/signup'>Sign up</Link></span>
          </div>
        </form>
      </section>
    </div>
  );
}

