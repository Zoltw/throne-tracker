import React, { useState } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import style from './App.module.css';
import Map from '@components/Map/Map';
import BigBox from '@components/BigBox/BigBox';
import Toilet from '@assets/example.jpg';
import SmallBox from '@components/SmallBox/SmallBox';
import ContentReview from '@components/ContentReview/ContentReview';
import ContentRate from '@components/ContentRate/ContentRate';
import NavBar from '@components/NavBar/NavBar';
import BurgerButton from '@components/BurgerButton/BurgerButton';
import { ContentType } from '@utils/api/fetchToilets';

const App: React.FC = (): JSX.Element => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [selectedMarker, setSelectedMarker] = useState<ContentType | null>(null);
  const [isNavBarVisible, setNavBarVisible] = useState(false);

  if (!isLoaded) return <div>Map Loading ...</div>;

  const toggleNavBar = () => {
    setNavBarVisible((prevState) => !prevState);
  };

  return (
    <>
      <BurgerButton onClick={toggleNavBar}/>
      {isNavBarVisible && <NavBar />}
      {/* <NavBar/> */}
      {/* <div className={style.backgroundNavbar}/> */}
      <Map />
      <BigBox
        src={Toilet}
        children={
          <ContentReview
            title={'McDonald\'s - Floriańska 55'}
            grade={4.5}
            reviewCount={23}
            hours={'6.00 - 22.00'}
            atribute1={'free'}
            atribute2={'clean'}
            atribute3={'white'}
            atribute4={'yes'}
            atribute5={'no'}
            atribute6={'ugly'}
          />}
        // children={
        //   <ContentRate />
        // }
      />
      {/* <Marker throne={{
        throneId: 0,
        location: {
          address: {
            country: 'Poland',
            city: 'Kraków',
            zip: '31-019',
            addressLine1: 'Floriańska 55',
          },
          latitude: 50.0646923541517,
          longitude: 19.941350749541165,
        },
        name: 'McDonald\'s - Floriańska 55',
      }} map={<Map/>}/> */}
      {/* <SmallBox
        text={'McDonald\'s - Floriańska 55'}
      /> */}
    </>
  );
};

export default App;
