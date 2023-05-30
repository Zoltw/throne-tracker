import { GoogleMap } from '@react-google-maps/api';
import style from './Map.module.css';
import { center, options } from './settings';
import CustomMarker from '../Marker/CustomMarker';
import { MarkerType } from '@utils/api/fetchToilets';

interface MapProps {
  center?: google.maps.LatLngLiteral;
  clickableIcons?: boolean;
  zoom?: number;
  streetView?: google.maps.StreetViewPanorama;
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onDetailsClick?: (marker: MarkerType) => void;
}

const Map: React.FC<MapProps> = ({
  clickableIcons = false,
  zoom = 15,
  onClick = () => undefined,
  onDetailsClick,
}) => {
  return (
    <GoogleMap
      mapContainerClassName={style.mapcontainer}
      options={options}
      center={center}
      clickableIcons={clickableIcons}
      zoom={zoom}
      onClick={onClick}
    >
      <CustomMarker onDetailsClick={onDetailsClick}/>
    </GoogleMap>
  );
};

export default Map;
