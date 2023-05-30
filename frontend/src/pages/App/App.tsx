/* eslint-disable guard-for-in */
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
import { fetchAverageRating, Rate, RateDetails } from '@utils/api/fetchRates';

const App: React.FC = (): JSX.Element => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [selectedMarker, setSelectedMarker] = useState<MarkerType | null>(null);
  const [averageRating, setAverageRating] = useState<Rate | null>(null);
  const [isNavBarVisible, setNavBarVisible] = useState(false);

  if (!isLoaded) return <div>Map Loading ...</div>;

  const toggleNavBar = () => {
    setNavBarVisible((prevState) => !prevState);
  };

  const handleMarkerClick = async (marker: MarkerType) => {
    setSelectedMarker(marker);
    const data = await fetchAverageRating(marker.toiletId ?? '');

    const translations = {
      clean: { yes: 'clean', no: 'no clean' },
      money: { yes: 'free', no: 'paid' },
      paper: { yes: 'white', no: 'no' },
      shower: { yes: 'yes', no: 'no' },
      smell: { yes: 'nice', no: 'ugly' },
      soap: { yes: 'yes', no: 'no' },
    };
    for (const detail in translations) {
      const key = detail as keyof typeof translations;
      if (data.details[key]) {
        data.details[key] = translations[key][data.details[key] as 'yes' | 'no'];
      }
    }

    setAverageRating(data);
  };

  return (
    <>
      <BurgerButton className={style.burger} onClick={toggleNavBar} src={burger}/>
      {isNavBarVisible && <NavBar />}
      <Map onDetailsClick={handleMarkerClick}/>
      {selectedMarker && averageRating && (
        <>
          <BurgerButton className={style.bigBoxClose} src={Xmark} onClick={() => setSelectedMarker(null)}/>
          <BigBox
            src={Toilet}
            children={<ContentReview
              title={selectedMarker.name ?? 'no data'}
              grade={averageRating.rate}
              reviewCount={averageRating.count}
              hours={selectedMarker.hours ?? 'no data'}
              atribute1={averageRating.details.money ?? 'no data'}
              atribute2={averageRating.details.clean ?? 'no data'}
              atribute3={averageRating.details.paper ?? 'no data'}
              atribute4={averageRating.details.soap ?? 'no data'}
              atribute5={averageRating.details.shower ?? 'no data'}
              atribute6={averageRating.details.smell ?? 'no data'}
            />}
          />
        </>
      )}
    </>
  );
};

export default App;
