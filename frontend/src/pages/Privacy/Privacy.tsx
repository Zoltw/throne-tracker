import BurgerButton from '@components/BurgerButton/BurgerButton';
import style from './Privacy.module.css';
import mapIcon from '@assets/maps.svg';
import { Link, useNavigate } from 'react-router-dom';


const Privacy: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  const navigator = () => {
    navigate('/');
  };

  return (
    <div className={style.backgroundSign}>
      <BurgerButton onClick={navigator} src={mapIcon}/>
      <section className={style.section}>
        <div className={style.content}>
          <h1 className={style.title}>Privacy Policy</h1>
          <p>This Privacy Policy sets out how our application ("We", "Our", "Us")
            collects, uses and protects any information that you provide when using our service.</p>
          <p>We are committed to ensuring that your privacy is protected.
            If we ask you to provide certain information by which you can be identified when using this application,
            you can be assured that it will only be used in accordance with this Privacy Statement.</p>
          <p>Information We Collect:</p>
          <p>1. Personal Identification Information: We may collect personal identification information from
            Users in a variety of ways, including, but not limited to, when Users visit our site, register,
            and in connection with other activities, services, features or resources we make available on our App.</p>
          <p>2. Non-Personal Identification Information: We may collect non-personal identification information about
            Users whenever they interact with our App. Non-personal identification information may include the browser
            name, the type of device and technical information about Users means of connection to our App,
            such as the operating system and the Internet service providers utilized and other similar information.</p>
          <p>How We Use Collected Information:</p>
          <p>1. To improve customer service: Information you provide helps us respond to your customer service
            requests and support needs more efficiently.</p>
          <p>2. To personalize user experience: We may use information in the aggregate to understand how our
            Users as a group use the services and resources provided on our App.</p>
          <p>3. To improve our App: We may use feedback you provide to improve our products and services.</p>
          <p>Security:</p>
          <p>We are committed to ensuring that your information is secure. In order to prevent unauthorized access
            or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard
            and secure the information we collect online.</p>
          <p>Changes to this Privacy Policy:</p>
          <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
        </div>
      </section>
      <footer>Contact Us:  <a className={style.menuAnimation} href="mailto:filip.zolyniak@zoltw.com?">filip.zolyniak@zoltw.com</a></footer>
    </div>
  );
};

export default Privacy;
