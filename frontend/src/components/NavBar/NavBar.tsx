import { Component, HTMLAttributes } from 'react';

import icon from '@assets/icons/menu.svg';

import style from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

export interface NavBarProps {
  className?: string;
}

export default class NavBar extends Component<NavBarProps> {
  render(): JSX.Element {
    return (
      <div className={style.activeNavbar}>
        <div className={[style.navbar, this.props.className].join(' ')} >
          <NavLink to={'/'} className={style.navbarLink}>
            <div style={NavBar.menuButtonStyleGenerator(icon)} />
            <span>Back to map</span>
          </NavLink>
          <NavLink to={'/login'} className={style.navbarLink}>
            <div style={NavBar.menuButtonStyleGenerator(icon)} />
            <span>Sign in</span>
          </NavLink>
          <NavLink to={'/sign'} className={style.navbarLink}>
            <div style={NavBar.menuButtonStyleGenerator(icon)} />
            <span>Sign up</span>
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
