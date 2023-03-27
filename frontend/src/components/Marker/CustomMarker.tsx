import { useState } from 'react';
import { markersExample } from './ExampleData';
import { InfoWindow, Marker } from '@react-google-maps/api';
import customMarker from '@assets/customMarker.svg';
import Button from '@components/Button/Button';
import style from './CustomMarker.module.css';

export type MarkerType = {
  location: google.maps.LatLngLiteral;
  name: string;
};

export default function CustomMarker(): JSX.Element {
  const [selectedMarker, setSelectedMarker] = useState<MarkerType | null>(null);

  return (
    <>
      {markersExample.map((marker) => {
        return (
          <div key={marker.name}>
            <Marker
              position={marker.location}
              options={{ icon: customMarker }}
              onClick={() => {
                setSelectedMarker(marker);
              }}
            />
          </div>
        );
      })}
      {selectedMarker && Object.keys(selectedMarker).length > 0 && (
        <InfoWindow
          position={selectedMarker.location}
          onCloseClick={() => {
            setSelectedMarker(null);
          }}
        >
          <div>
            <span>{selectedMarker.name}</span>
            <Button text={'details'} />
            <Button text={'rate it'} />
          </div>
        </InfoWindow>
      )}
    </>
  );
}
