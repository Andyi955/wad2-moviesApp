import React from "react";
import PageTemplate from "../components/templateActorsListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getPopularActors} from '../api/tmdb-api'


const PopularActorsPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('', getPopularActors)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actors = data.results;

  

  return (
    <PageTemplate
      title="Actors"
      actors={actors}
    
    />    
  );
};

export default PopularActorsPage;