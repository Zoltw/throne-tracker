const fetchUrl = `${import.meta.env.VITE_APP_BACKEND_URL}/ratings`;

export interface RateDetails {
  money: string;
  clean: string;
  paper: string;
  soap: string;
  shower: string;
  smell: string;
  [key: string]: string;
}

export interface Rate {
  toiletId: string;
  count: number;
  rate: number;
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

export const fetchAverageRating = async (toiletId: string): Promise<Rate> => {
  // try {
  const response = await fetch(`${fetchUrl}/${toiletId}`);
  const data = await response.json();
  return data;
  // } catch (error) {
  //   console.error(error);
  //   return ;
  // }
};
