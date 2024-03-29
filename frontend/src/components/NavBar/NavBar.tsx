import { HTMLAttributes } from 'react';

import signin from '@assets/signIn.svg';
import signup from '@assets/signUp.svg';
import toilet from '@assets/toilet.svg';

import style from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import logo from '@assets/throne-tracker-logo.svg';

import { getJwtToken, logout } from '@utils/auth/auth';

interface NavBarProps {
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  const menuButtonStyleGenerator = (icon: string): HTMLAttributes<HTMLDivElement>['style'] => {
    return {
      maskImage: `url(${icon})`,
      WebkitMaskImage: `url(${icon})`,
    };
  };

  const isLoggedIn = !!getJwtToken();

  return (
    <div className={style.activeNavbar}>
      <div className={[style.navbar, className].join(' ')} >
        <img className={style.logo} src={logo} />
        {!isLoggedIn && (
          <>
            <NavLink to={'/login'} className={style.navbarLink}>
              <div style={menuButtonStyleGenerator(signin)} />
              <span>Sign in</span>
            </NavLink>
            <NavLink to={'/signup'} className={style.navbarLink}>
              <div style={menuButtonStyleGenerator(signup)} />
              <span>Sign up</span>
            </NavLink>
          </>
        )}
        {isLoggedIn && (
          <div onClick={logout} className={style.navbarLink}>
            <div style={menuButtonStyleGenerator(signup)} />
            <span>Logout</span>
          </div>
        )}
        <img className={style.toitoi} src={toilet} />
        <NavLink to={'/privacy'} className={style.pap}>
          <span>privacy & policy</span>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
