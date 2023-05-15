const fetchUrl = `${import.meta.env.VITE_APP_BACKEND_URL}/toilets`;

export type MarkerType = {
  _id?: string;
  location: google.maps.LatLngLiteral;
  name: string;
  visible: boolean;
  __mapMarker?: google.maps.Marker;
};

export type ContentType = {
  _id: string;
  name: string;
  location: {
    address: {
      country: string;
      city: string;
      zip: string;
      addressLine1: string;
    };
    latitude: number;
    longitude: number;
  };
  rates: {
    id: string;
  };
};


export const fetchToilets = async () => {
  const response = await fetch(fetchUrl);
  const data = await response.json();
  return data;
};

export const convertToMarkerType = (toiletData: any): MarkerType[] => {
  return toiletData.map((toilet: any) => ({
    _id: toilet._id,
    name: toilet.name,
    location: {
      lat: toilet.location.latitude,
      lng: toilet.location.longitude,
    },
    visible: true,
  }));
};

export const convertToContentType = (toiletData: any): ContentType[] => {
  return toiletData.map((toilet: any) => ({
    _id: toilet._id,
    name: toilet.name,
    location: {
      address: {
        country: toilet.location.address.country,
        city: toilet.location.address.city,
        zip: toilet.location.address.zip,
        addressLine1: toilet.location.address.addressLine1,
      },
      latitude: toilet.location.latitude,
      longitude: toilet.location.longitude,
    },
    rates: {
      id: toilet.rates.id,
    },
  }));
};
