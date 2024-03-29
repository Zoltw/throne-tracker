import { useEffect, useRef, useState } from 'react';
import { InfoWindow, Marker } from '@react-google-maps/api';
import { convertToMarkerType, fetchToilets, MarkerType } from '@utils/api/fetchToilets';
import customMarker from '@assets/customMarker.svg';
import Button from '@components/Button/Button';
import style from './CustomMarker.module.css';

interface CustomMarkerProps {
  onDetailsClick?: (marker: MarkerType) => void;
  onRateClick?: (marker: MarkerType) => void;
}

const CustomMarker: React.FC<CustomMarkerProps> = ({ onDetailsClick, onRateClick }): JSX.Element => {
  const [selectedMarker, setSelectedMarker] = useState<MarkerType | null>(null);
  const [markers, setMarkers] = useState<MarkerType[]>([]);
  const mapRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    const fetchAndSetMarkers = async () => {
      const toiletData = await fetchToilets();
      const initialMarkers = convertToMarkerType(toiletData);
      setMarkers(initialMarkers);
    };
    fetchAndSetMarkers();
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
    onDetailsClick?.(marker);
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
            <strong>{selectedMarker.name}</strong>
            <sub>{selectedMarker.address}</sub>
            <Button text={'details'} onClick={() => onDetailsClick && onDetailsClick(selectedMarker)}/>
          </div>
        </InfoWindow>
      )}
    </>
  );
};

export default CustomMarker;
