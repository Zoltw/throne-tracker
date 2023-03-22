import style from './Signup.module.css';
import Input from '@components/Input/Input';
import Button from '@components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

export default function Signup(): JSX.Element {
  const [isShown, setIsSHown] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };

  const email = useRef(null);
  const password = useRef(null);
  const passwordConfirmation = useRef(null);

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordConfirmationValid, setPasswordConfirmationValid] = useState(false);
  const [tosChecked, setTosChecked] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(emailValid && passwordValid && passwordConfirmationValid && tosChecked);
  }, [
    emailValid,
    passwordValid,
    passwordConfirmationValid,
    tosChecked,
  ]);

  return (
    <div className={style.backgroundSign}>
      <section className={style.section}>
        <h1 className={style.title}>Sign up to Throne Tracker</h1>
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
          <Input
            useRef={passwordConfirmation}
            correctValue={setPasswordConfirmationValid}
            // sibling={password}
            type={isShown ? 'text' : 'password'}
            name={'passwordRegisterRepeat'}
            placeholder={'Repeat your password'}
            required
            className={style.formElement} />
          <label className={style.checkboxLabel}>
            <input type="checkbox" checked={isShown} onChange={togglePassword} />
            <em>Show password?</em>
          </label>
          <label className={style.label}>
            <input
              type="checkbox"
              name="terms"
              value="terms"
              required={true}
              onChange={({ target }) => setTosChecked(target.checked)} />
            <em>I agree to our privacy and terms of service.</em>
          </label>
          <div className={style.formOptions}>
            <Button text={'Sign up'} width={''} />
            <span>Already have an account? <Link to='/login'>Sign in</Link></span>
          </div>
        </form>
      </section>
    </div>
  );
}

