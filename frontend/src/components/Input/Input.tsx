import { ChangeEventHandler, Component, createRef, RefObject } from 'react';

import style from './Input.module.css';

// eslint-disable-next-line max-len, no-useless-escape
const validEmailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/);
const passwordLengthRegex = RegExp(/^(?=.{8,64})/);
const passwordCapitalLetterRegex = RegExp(/^(?=.*?[A-Z])/);
const passwordLowercaseLetterRegex = RegExp(/^(?=.*?[a-z])/);
const passwordNumberRegex = RegExp(/^(?=.*?[0-9])/);
const passwordSpecialCharacterRegex = RegExp(/^(?=.*?[#?!@$%^&*-])/);

export interface InputProps {
  type?: string,
  name?: string,
  placeholder?: string,
  shadows?: boolean,
  className?: string,
  focus?: boolean,
  id?: string,
  autoComplete?: string;
  required?: boolean;
  useRef?: RefObject<HTMLInputElement>;
  correctValue?: (isCorrect: boolean) => void,
  sibling?: RefObject<HTMLInputElement>,
}

export interface InputState {
  message: string;
}

export default class Inputs extends Component<InputProps, InputState> {
  private inputRef: RefObject<HTMLInputElement>;

  private static defaultProps: InputProps = {
    shadows: true,
    focus: false,
  };

  constructor(props: InputProps) {
    super(props);
    this.props.correctValue?.(false);

    this.state = {
      message: '',
    };

    if (this.props.useRef === undefined) this.inputRef = createRef();
    else this.inputRef = this.props.useRef;
  }

  private validateSiblings = (): boolean => {
    if (this.props.sibling === undefined) return true;

    const input = this.inputRef.current;
    const sibling = this.props.sibling?.current;

    if (!input || !sibling) return false;

    return input.value === sibling.value;
  };

  private changeEventHandler: ChangeEventHandler = (event) => {
    event.preventDefault();
    this.validateInput();
  };

  private validateInput = () => {
    const input = this.inputRef.current;
    if (!input) return;

    const value = input.value;
    if (value.length === 0) return this.props.correctValue?.(false);

    if (input.name.includes('email')) {
      if (!validEmailRegex.test(value)) {
        this.setState({ message: 'Email is not valid' });
        this.props.correctValue?.(false);
      } else if (value.length > 64) {
        this.setState({ message: 'Email is too long' });
        this.props.correctValue?.(false);
      } else {
        this.setState({ message: '' });
        this.props.correctValue?.(true);
      }
    }

    if (input.name.includes('passwordLogin')) {
      if (!passwordLengthRegex.test(value)) {
        this.setState({ message: 'Password must be between 8 and 64 characters' });
        this.props.correctValue?.(false);
      } else {
        this.setState({ message: '' });
        this.props.correctValue?.(true);
      }
    }

    if (input.name.includes('passwordRegister') || input.name.includes('newPassword')) {
      if (!passwordCapitalLetterRegex.test(value)) {
        this.setState({ message: 'Password must contain at least one capital letter' });
        this.props.correctValue?.(false);
      } else if (!passwordLowercaseLetterRegex.test(value)) {
        this.setState({ message: 'Password must contain at least one lowercase letter' });
        this.props.correctValue?.(false);
      } else if (!passwordNumberRegex.test(value)) {
        this.setState({ message: 'Password must contain at least one number' });
        this.props.correctValue?.(false);
      } else if (!passwordSpecialCharacterRegex.test(value)) {
        this.setState({ message: 'Password must contain at least one special character' });
        this.props.correctValue?.(false);
      } else if (!passwordLengthRegex.test(value)) {
        this.setState({ message: 'Password must be between 8 and 64 characters' });
        this.props.correctValue?.(false);
      } else if (!this.validateSiblings()) {
        this.setState({ message: 'Passwords do not match' });
        this.props.correctValue?.(false);
      } else {
        this.setState({ message: '' });
        this.props.correctValue?.(true);
      }
    }
  };

  public componentDidMount(): void {
    if (this.props.sibling) {
      this.props.sibling.current?.addEventListener('input', this.validateInput);
    }
  }

  public componentWillUnmount(): void {
    if (this.props.sibling) {
      this.props.sibling.current?.removeEventListener('input', this.validateInput);
    }
  }

  render(): JSX.Element {
    return (
      <div className={style.container}>
        <input
          ref={this.props.useRef}
          className={[style.input, this.props.className, this.props.shadows ? style.shadow : ''].join(' ')}
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          autoFocus={this.props.focus}
          id={this.props.id}
          autoComplete={this.props.autoComplete}
          required={this.props.required}
          onChange={this.changeEventHandler}
        />
        <span className={style.message}>{this.state.message}</span>
      </div>
    );
  }
}

