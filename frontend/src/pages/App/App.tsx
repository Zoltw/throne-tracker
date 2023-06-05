import React, { useCallback, useReducer } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import style from './App.module.css';
import Map from '@components/Map/Map';
import BigBox from '@components/BigBox/BigBox';
import burger from '@assets/burger.svg';
import Toilet from '@assets/toi0.jpg';
import ContentReview from '@components/ContentReview/ContentReview';
import ContentRate from '@components/ContentRate/ContentRate';
import NavBar from '@components/NavBar/NavBar';
import BurgerButton from '@components/BurgerButton/BurgerButton';
import Xmark from '@assets/xmark-checked.svg';
import { MarkerType } from '@utils/api/fetchToilets';
import { fetchAverageRating } from '@utils/api/fetchRates';
import { isLoggedIn } from '@utils/auth/auth';
import { initialState, reducer, updateRatingDetails } from '@utils/reducers/appReducer';


const App: React.FC = (): JSX.Element => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleRateClick = useCallback(() => {
    if (!isLoggedIn()) {
      alert('You must be logged in to rate a toilet');
    } else {
      dispatch({ type: 'SET_CONTENT_TO_RENDER', payload: true });
    }
  }, []);

  const handleMarkerClick = useCallback(async (marker: MarkerType) => {
    dispatch({ type: 'SET_SELECTED_MARKER', payload: marker });
    const data = await fetchAverageRating(marker?.toiletId ?? '');
    const updatedData = updateRatingDetails(data);
    dispatch({ type: 'SET_AVERAGE_RATING', payload: updatedData });
  }, []);

  if (!isLoaded) return <div>Map Loading ...</div>;

  return (
    <>
      <BurgerButton className={style.burger} onClick={() => dispatch({ type: 'TOGGLE_NAVBAR' })} src={burger}/>
      {state.isNavBarVisible && <NavBar />}
      <Map onDetailsClick={handleMarkerClick}/>
      {state.selectedMarker && state.averageRating && (
        <>
          <BurgerButton className={style.bigBoxClose} src={Xmark} onClick={() => {
            dispatch({ type: 'SET_SELECTED_MARKER', payload: null }); dispatch({ type: 'SET_CONTENT_TO_RENDER', payload: false });
          }}/>
          <BigBox
            src={state.selectedMarker?.photo ?? Toilet}
            children={
              state.contentToRender ? (
                <ContentRate toiletId={state.selectedMarker?.toiletId} />
              ) : (
                <ContentReview
                  title={state.selectedMarker?.name ?? 'no data'}
                  grade={state.averageRating?.rate}
                  reviewCount={state.averageRating?.count}
                  hours={state.selectedMarker?.hours ?? 'no data'}
                  atribute1={state.averageRating?.details?.money ?? 'no data'}
                  atribute2={state.averageRating?.details?.clean ?? 'no data'}
                  atribute3={state.averageRating?.details?.paper ?? 'no data'}
                  atribute4={state.averageRating?.details?.soap ?? 'no data'}
                  atribute5={state.averageRating?.details?.shower ?? 'no data'}
                  atribute6={state.averageRating?.details?.smell ?? 'no data'}
                  onRateItClick={handleRateClick}
                />
              )
            }
          />
        </>
      )}
    </>
  );
};

export default App;
