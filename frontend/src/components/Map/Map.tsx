import { GoogleMap } from '@react-google-maps/api';
import style from './Map.module.css';
import { center, options } from './settings';
import CustomMarker from '../Marker/CustomMarker';
import { MarkerType } from '@utils/api/fetchToilets';

interface MapProps {
  id?: string;
  mapContainerClassName?: string;
  options?: google.maps.MapOptions;
  center?: google.maps.LatLngLiteral;
  clickableIcons?: boolean;
  mapTypeId?: google.maps.MapTypeId;
  tilt?: number;
  zoom?: number;
  streetView?: google.maps.StreetViewPanorama;
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onMarkerClick?: (marker: MarkerType) => void;
}

const Map: React.FC<MapProps> = ({
  id = '',
  mapContainerClassName = '',
  clickableIcons = false,
  mapTypeId,
  tilt = 0,
  zoom = 15,
  streetView,
  onClick = () => undefined,
  onMarkerClick,
}) => {
  return (
    <GoogleMap
      id={id}
      mapContainerClassName={[style.mapcontainer, mapContainerClassName].join(' ')}
      options={options}
      center={center}
      clickableIcons={clickableIcons}
      mapTypeId={mapTypeId}
      tilt={tilt}
      zoom={zoom}
      streetView={streetView}
      onClick={onClick}
    >
      <CustomMarker onMarkerClick={onMarkerClick}/>
    </GoogleMap>
  );
};

export default Map;
