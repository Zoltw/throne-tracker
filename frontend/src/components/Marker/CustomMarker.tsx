import { useEffect, useRef, useState } from 'react';
import { markersExample } from './ExampleData';
import { InfoWindow, Marker } from '@react-google-maps/api';
import customMarker from '@assets/customMarker.svg';
import Button from '@components/Button/Button';
import style from './CustomMarker.module.css';

type MarkerType = {
  location: google.maps.LatLngLiteral;
  name: string;
  visible: boolean;
  __mapMarker?: google.maps.Marker;
};

export default function CustomMarker(): JSX.Element {
  const [selectedMarker, setSelectedMarker] = useState<MarkerType | null>(null);
  const [markers, setMarkers] = useState<MarkerType[]>([]);
  const mapRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    const initialMarkers = markersExample.map((marker) => ({
      ...marker,
      visible: true,
    }));
    setMarkers(initialMarkers);
  }, []);

  useEffect(() => {
    markers.forEach((marker) => {
      const map = mapRef.current;
      const existingMarker = marker.__mapMarker;

      if (existingMarker && !marker.visible) {
        existingMarker.setMap(null);
        delete marker.__mapMarker;
      } else if (map && !existingMarker && marker.visible) {
        const newMarker = new google.maps.Marker({
          position: marker.location,
          map,
          icon: customMarker,
        });
        marker.__mapMarker = newMarker;
      }
    });
  }, [markers]);

  const handleMarkerClick = (marker: MarkerType) => {
    setSelectedMarker(marker);
  };

  const handleInfoWindowClose = () => {
    setSelectedMarker(null);
  };

  return (
    <>
      {markers.map((marker) => (
        <div key={marker.name}>
          {marker.visible && (
            <Marker
              position={marker.location}
              icon={customMarker}
              onClick={() => handleMarkerClick(marker)}
            />
          )}
        </div>
      ))}
      {selectedMarker && (
        <InfoWindow
          position={selectedMarker.location}
          onCloseClick={handleInfoWindowClose}
        >
          <div className={style.smallBox}>
            <span>{selectedMarker.name}</span>
            <Button text={'details'} />
            <Button text={'rate it'} />
          </div>
        </InfoWindow>
      )}
    </>
  );
}
