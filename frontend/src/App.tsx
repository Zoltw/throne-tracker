import React from 'react';
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';
import './App.css'

export type WeatherType = {
  temp: number;
  text: string;
};

export type MarkerType = {
  id: string;
  location: google.maps.LatLngLiteral;
  name: string;
  phone_number: string;
  website: string;
};

const App: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY!
  });

  const [clickedPos, setClickedPos] = React.useState<google.maps.LatLngLiteral>({} as google.maps.LatLngLiteral);
  const [selectedMarker, setSelectedMarker] = React.useState<MarkerType>({} as MarkerType);

  const onMarkerClick = (marker: MarkerType) => setSelectedMarker(marker);

  if (!isLoaded) return <div>Map Loading ...</div>;

  return (
      <GoogleMap
        mapContainerClassName={'map-container'}
        center={{ lat: 50.0628492543524, lng: 19.93685690022494}}
        zoom={15}
      >
      </GoogleMap>
  );
};

export default App;