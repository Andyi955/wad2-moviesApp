# Assignment 1 - ReactJS app.

Name: [Andrew Ivory]

## Overview.

This repositry is for a basic movie app using react features and tmdb movie-api.
I will be showing off different fetaures taht can be used with the api.

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]
 
+ Tv shows Page + Tv deatils Page + its on genre filters
+ Actors Page + Actor Details page including a link to the actors most known movie
+ Firebase - Firebase email and password login/register + authenication
+ Private routes so the favourite page is only accessible by logging in
+ etc

## Setup requirements.

npm install firebase

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

e.g.
+ Discover list of movies - discover/movie
+ Movie details - movie/:id
+ Movie genres = /genre/movie/list
+ Disover Tv Shows = /discover/tv
+ Tv details = /tv/:id
+ Popular Actors = /popular/actors
+ Actor Details = /actor/:id
+ Review details = /review/:id

## App Design.

### Component catalogue.



![](./images/storybook.png)
### UI Design.
![](./images/actorsPage.png)
>Shows Popular actors and filter

![ ](./images/actordetailsPage.png)

>Shows detailed information on an Actor.

![](./images/tvshows.png)

>Shows Tv Shows

![](./images/Login)
### Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ Login = /login
+ Register = /signup
+ MoviesDetails for Actoors Known Movies /movies/${actor.known_for[0].id 
 
 The rest of the routes are similar to the endpoints (see above)

The Favorite page is private and only accesible when you have logged in.

## Independent learning (If relevant).

https://www.youtube.com/watch?v=MEAjrlQ35HQ - I used this for Firebase Auth
