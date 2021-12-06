import React from "react";
import PageTemplate from "../components/templateTvListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getTVShows} from '../api/tmdb-api'
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'


const TvPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('tv', getTVShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvs = data.results;

  // // Redundant, but necessary to avoid app crashing.
   const favorites = tvs.filter(m => m.favorite)
   localStorage.setItem('favorites', JSON.stringify(favorites))

  return (
    <PageTemplate
      title="Discover Tv Shows"
      tvs={tvs}
      action={(tv) => {
        return <AddToFavoritesIcon tv={tv} />
      }}
    />    
  );
};

export default TvPage;