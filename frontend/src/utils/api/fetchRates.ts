const fetchUrl = `${import.meta.env.VITE_APP_BACKEND_URL}/ratings`;

export interface RateDetails {
  rate: number;
  money: string;
  clean: string;
  paper: string;
  soap: string;
  shower: string;
  smell: string;
}

export interface Rate {
  id: string;
  toiletId: string;
  details: RateDetails;
}

export const fetchRates = async (): Promise<Rate[]> => {
  try {
    const response = await fetch(fetchUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
