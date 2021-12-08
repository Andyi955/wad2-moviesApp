import AddMovieReviewPage from './pages/addMovieReviewPage'
import SiteHeader from './components/siteHeader'
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import PopularActorsPage from './pages/popularActorsPage';
import TvPage from './pages/tvPage';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import TvDetailPage from "./pages/tvDetailsPage"
import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; // NEW
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
        <SiteHeader />      {/* New Header  */}
        <MoviesContextProvider>
            {" "}
      <Switch>
      <Route exact path="/Homepage" component={HomePage} />
      <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <Route exact path="/movies/upcomingmovies" component={UpcomingMoviesPage} />
        <Route exact path="/tv/discovertv" component={TvPage} />
        <Route exact path="/popular/actors" component={PopularActorsPage} />
      <Route exact path="/reviews/form" component={AddMovieReviewPage} />
      <Route path="/reviews/:id" component={MovieReviewPage} />   
        <Route path="/movies/:id" component={MoviePage} />
        <Route path="/tv/:id" component={TvDetailPage} />
        <Redirect from="*" to="/Homepage" />
      </Switch>
      </MoviesContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
console.log(HomePage)
ReactDOM.render(<App />, document.getElementById("root"));