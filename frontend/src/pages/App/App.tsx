import React, { useState } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import style from './App.module.css';
import Map from '@components/Map/Map';
import BigBox from '@components/BigBox/BigBox';
import Toilet from '@assets/example.jpg';
import burger from '@assets/burger.svg';
import ContentReview from '@components/ContentReview/ContentReview';
import ContentRate from '@components/ContentRate/ContentRate';
import NavBar from '@components/NavBar/NavBar';
import BurgerButton from '@components/BurgerButton/BurgerButton';
import Xmark from '@assets/xmark.svg';
import { ContentType, MarkerType } from '@utils/api/fetchToilets';

const App: React.FC = (): JSX.Element => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [selectedMarker, setSelectedMarker] = useState<MarkerType | null>(null);
  const [isNavBarVisible, setNavBarVisible] = useState(false);

  if (!isLoaded) return <div>Map Loading ...</div>;

  const toggleNavBar = () => {
    setNavBarVisible((prevState) => !prevState);
  };

  const handleMarkerClick = (marker: MarkerType) => {
    setSelectedMarker(marker);
  };

  return (
    <>
      <BurgerButton className={style.burger} onClick={toggleNavBar} src={burger}/>
      {isNavBarVisible && <NavBar />}
      <Map onMarkerClick={handleMarkerClick}/>
      {selectedMarker && (
        <>
          <BurgerButton className={style.bigBoxClose} src={Xmark} onClick={() => setSelectedMarker(null)}/>
          <BigBox
            src={Toilet}
            children={<ContentReview
              title={selectedMarker.name ?? 'no data'}
              grade={4.5}
              reviewCount={23}
              hours={selectedMarker.hours ?? 'no data'}
              atribute1={selectedMarker.atribute1 ?? 'no data'}
              atribute2={selectedMarker.atribute2 ?? 'no data'}
              atribute3={selectedMarker.atribute3 ?? 'no data'}
              atribute4={selectedMarker.atribute4 ?? 'no data'}
              atribute5={selectedMarker.atribute5 ?? 'no data'}
              atribute6={selectedMarker.atribute6 ?? 'no data'}
            />}
          />
        </>
      )}
    </>
  );
};

export default App;
