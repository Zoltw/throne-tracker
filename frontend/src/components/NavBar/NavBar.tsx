import { Component, HTMLAttributes } from 'react';

import signin from '@assets/signIn.svg';
import signup from '@assets/signUp.svg';
import toilet from '@assets/toilet.svg';

import style from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import logo from '@assets/throne-tracker-logo.svg';

export interface NavBarProps {
  className?: string;
}

export interface NavBarState {
  active: boolean;
}

export default class NavBar extends Component<NavBarProps, NavBarState> {
  constructor(props: NavBarProps) {
    super(props);
    this.state = {
      active: false,
    };
  }

  render(): JSX.Element {
    return (
      <div className={style.activeNavbar}>
        <div className={[style.navbar, this.props.className].join(' ')} >
          <img className={style.logo} src={logo} />
          <NavLink to={'/login'} className={style.navbarLink}>
            <div style={NavBar.menuButtonStyleGenerator(signin)} />
            <span>Sign in</span>
          </NavLink>
          <NavLink to={'/signup'} className={style.navbarLink}>
            <div style={NavBar.menuButtonStyleGenerator(signup)} />
            <span>Sign up</span>
          </NavLink>
          <img className={style.toitoi} src={toilet} />
          <NavLink to={'/'} className={style.pap}>
            <span>privacy & policy</span>
          </NavLink>
        </div>
      </div>
    );
  }

  private static menuButtonStyleGenerator = (icon: string): HTMLAttributes<HTMLDivElement>['style'] => {
    return {
      maskImage: `url(${icon})`,
      WebkitMaskImage: `url(${icon})`,
    };
  };
}
