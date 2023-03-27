import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';
import style from './Map.module.css';
import { center, options } from './settings';
import CustomMarker from '../Marker/CustomMarker';

import { Component, HTMLAttributes, useState } from 'react';
import Button from '@components/Button/Button';

export interface MapProps {
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
  children?: HTMLAttributes<HTMLDivElement>['children'];
}

export default class Map extends Component<MapProps> {
  private static defaultProps: MapProps = {
    id: '',
    mapContainerClassName: '',
    options: options,
    center: center,
    clickableIcons: false,
    mapTypeId: undefined,
    tilt: 0,
    zoom: 15,
    streetView: undefined,
    onClick: () => undefined,
  };

  render(): JSX.Element {
    return (
      <GoogleMap
        id={this.props.id}
        mapContainerClassName={[style.mapcontainer, this.props.mapContainerClassName].join(' ')}
        options={this.props.options}
        center={this.props.center}
        clickableIcons={this.props.clickableIcons}
        mapTypeId={this.props.mapTypeId}
        tilt={this.props.tilt}
        zoom={this.props.zoom}
        streetView={this.props.streetView}
        onClick={this.props.onClick}
      >
        <CustomMarker />
      </GoogleMap>
    );
  }
}

