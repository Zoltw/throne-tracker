const fetchUrl = `${import.meta.env.VITE_APP_BACKEND_URL}/toilets`;

export type MarkerType = {
  _id?: string;
  toiletId?: string;
  location: google.maps.LatLngLiteral;
  name: string;
  hours: string;
  photo: string;
  address: string;
  visible: boolean;
  __mapMarker?: google.maps.Marker;
};

export type ContentType = {
  _id: string;
  toiletId: string;
  name: string;
  hours: string;
  photo: string;
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


export const fetchToilets = async (): Promise<JSON> => {
  const response = await fetch(fetchUrl);
  const data = await response.json();
  return data;
};

export const convertToMarkerType = (toiletData: ContentType[]): MarkerType[] => {
  return toiletData.map((toilet: ContentType) => ({
    _id: toilet._id,
    toiletId: toilet.toiletId,
    name: toilet.name,
    hours: toilet.hours,
    photo: toilet.photo,
    location: {
      lat: toilet.location.latitude,
      lng: toilet.location.longitude,
    },
    address: toilet.location.address.addressLine1,
    visible: true,
  }));
};

export const convertToContentType = (toiletData: ContentType[]): ContentType[] => {
  return toiletData.map((toilet: ContentType) => ({
    _id: toilet._id,
    toiletId: toilet.toiletId,
    name: toilet.name,
    hours: toilet.hours,
    photo: toilet.photo,
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
