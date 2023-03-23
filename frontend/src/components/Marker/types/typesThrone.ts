export interface FetchThronesResponse {
  thrones: {
    throneId: number;
    location: {
      address: {
        country: string;
        city: string;
        zip: string;
        addressLine1: string;
      }
      latitude: number | undefined;
      longitude: number | undefined;
    };
    name: string;
  };
}
