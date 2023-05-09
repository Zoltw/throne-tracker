import React, { Suspense } from 'react';
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

const App = (): JSX.Element => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [clickedPos, setClickedPos] = React.useState<google.maps.LatLngLiteral>({} as google.maps.LatLngLiteral);

  if (!isLoaded) return <div>Map Loading ...</div>;

  return (
    <>
      <BurgerButton/>
      {/* <NavBar/> */}
      {/* <div className={style.backgroundNavbar}/> */}
      <Suspense fallback={<div>Loading ...</div>}>
        <Map />
      </Suspense>
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
