import AddMovieReviewPage from './pages/addMovieReviewPage'
import SiteHeader from './components/siteHeader'
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import PopularActorsPage from './pages/popularActorsPage';
import TvPage from './pages/tvPage';
import ActorDetailsPage from './pages/actorDetailsPage'
import LoginPage from './pages/loginPage';
import LoginPageUser from './loginPageUser';
import SignUpPageUser from './signUpUserPage';
import SignUpPage from './pages/signUpPage';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import TvDetailPage from "./pages/tvDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; // NEW
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
// import { AuthContextProvider,useAuthState } from './firebase-config';
import PrivateRoute from "./privateRoute";
import AuthHeader from "./authHeader";
import  AuthProvider  from './contexts/authContext';
import MovieProvider from "./contexts/moviesContext";






const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});




// const AuthenicatedRoute = ({component:C,...props}) => {
//   const {isAuthenticated} = useAuthState()
//   return (
//     <Route
//     {...props}
//     render={routeProps =>
//     isAuthenticated ? <C {...routeProps}/> : <Redirect to="/login" />
//     } 
    
//     />
//   )
  
// } 

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <SiteHeader />  
        <AuthHeader />    {/* New Header  */}
        <MoviesContextProvider>
            {" "}
            <MovieProvider>
      <Switch>
      <PrivateRoute exact path="/" component={HomePage} />
      <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <Route exact path="/movies/upcomingmovies" component={UpcomingMoviesPage} />
        <Route exact path="/tv/discovertv" component={TvPage} />
        <PrivateRoute exact path="/popular/actors" component={PopularActorsPage} />
        {/* <Route exact path="/login" component={LoginPage} /> */}
        <Route exact path="/loginUserName" component={LoginPageUser} />
        <Route exact path="/signUpUserName" component={SignUpPageUser} />
        <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/reviews/form" component={AddMovieReviewPage} />
      <Route path="/reviews/:id" component={MovieReviewPage} />   
        <Route path="/movies/:id" component={MoviePage} />
        <Route path="/tv/:id" component={TvDetailPage} />
        <Route path="/actor/:id" component={ActorDetailsPage} />
        <Redirect from="*" to="/" />
      </Switch>
      </MovieProvider>
      </MoviesContextProvider>
      </AuthProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
console.log(HomePage)
ReactDOM.render(<App />, document.getElementById("root"));