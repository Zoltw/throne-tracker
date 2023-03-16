import React from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import style from './App.module.css';
import Map from '@components/Map/Map';
import BigBox from '@components/BigBox/BigBox';
import Toilet from '@assets/example.jpg';
import SmallBox from '@components/SmallBox/SmallBox';

export type WeatherType = {
  temp: number;
  text: string;
};

export type MarkerType = {
  id: string;
  location: google.maps.LatLngLiteral;
  name: string;
  street: string;
};

const App: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY!,
  });

  const [clickedPos, setClickedPos] = React.useState<google.maps.LatLngLiteral>({} as google.maps.LatLngLiteral);
  const [selectedMarker, setSelectedMarker] = React.useState<MarkerType>({} as MarkerType);

  const onMarkerClick = (marker: MarkerType) => setSelectedMarker(marker);

  if (!isLoaded) return <div>Map Loading ...</div>;

  return (
    <>
      <Map />
      <BigBox
        title={'McDonald\'s - Floriańska 55'}
        src={Toilet}
        grade={4.2}
        reviewCount={22}
        atribute1={'free'}
        atribute2={'clean'}
        atribute3={'white'}
        atribute4={'yes'}
        atribute5={'no'}
        atribute6={'ugly'}
      />
      <SmallBox
        text={'McDonald\'s - Floriańska 55'}
      />
    </>
  );
};

export default App;
