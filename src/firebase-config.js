
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyDTcRgiHPZF5wP8sl-xZHlkZ3pmJ5YkSVc",
    authDomain: "movie-tmdb-e2c58.firebaseapp.com",
    projectId: "movie-tmdb-e2c58",
    storageBucket: "movie-tmdb-e2c58.appspot.com",
    messagingSenderId: "692633223993",
    appId: "1:692633223993:web:03218454ceda9b82389ee8",
    measurementId: "${config.measurementId}"
  };

  const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);