import BurgerButton from '@components/BurgerButton/BurgerButton';
import style from './NotFound.module.css';
import mapIcon from '@assets/maps.svg';
import { useNavigate } from 'react-router-dom';


const NotFound: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  const navigator = () => {
    navigate('/');
  };

  return (
    <div className={style.backgroundSign}>
      <BurgerButton onClick={navigator} src={mapIcon}/>
      <p className={style.error}>404</p>
      <footer>Contact Us:  <a className={style.menuAnimation} href="mailto:filip.zolyniak@zoltw.com?">filip.zolyniak@zoltw.com</a></footer>
    </div>
  );
};

export default NotFound;
