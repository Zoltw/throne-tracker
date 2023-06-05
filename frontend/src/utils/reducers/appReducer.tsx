/* eslint-disable guard-for-in */
import { Rate } from '@utils/api/fetchRates';
import { MarkerType } from '@utils/api/fetchToilets';

type State = {
  selectedMarker: MarkerType | null;
  averageRating: Rate | null;
  isNavBarVisible: boolean;
  contentToRender: boolean;
};

type Action =
    | { type: 'SET_SELECTED_MARKER'; payload: MarkerType | null }
    | { type: 'SET_AVERAGE_RATING'; payload: Rate | null }
    | { type: 'TOGGLE_NAVBAR' }
    | { type: 'SET_CONTENT_TO_RENDER'; payload: boolean };

export const initialState: State = {
  selectedMarker: null,
  averageRating: null,
  isNavBarVisible: false,
  contentToRender: false,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_SELECTED_MARKER':
      return { ...state, selectedMarker: action.payload };
    case 'SET_AVERAGE_RATING':
      return { ...state, averageRating: action.payload };
    case 'TOGGLE_NAVBAR':
      return { ...state, isNavBarVisible: !state.isNavBarVisible };
    case 'SET_CONTENT_TO_RENDER':
      return { ...state, contentToRender: action.payload };
    default:
      throw new Error();
  }
};


const translations = {
  clean: { yes: 'clean', no: 'dirty' },
  money: { yes: 'free', no: 'paid' },
  paper: { yes: 'white', no: 'no' },
  shower: { yes: 'yes', no: 'no' },
  smell: { yes: 'nice', no: 'ugly' },
  soap: { yes: 'yes', no: 'no' },
};

export const updateRatingDetails = (data: Rate): Rate => {
  for (const detail in translations) {
    const key = detail as keyof typeof translations;
    if (data.details[key]) {
      data.details[key] = translations[key][data.details[key] as 'yes' | 'no'];
    } else {
      data.details[key] = 'no data';
    }
  }
  return data;
};
