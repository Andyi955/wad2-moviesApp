
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyDp_hMpEH5Tq8Bm5TxUzev0S5T3xYffE8g",
    authDomain: "movieapp-e17fb.firebaseapp.com",
    projectId: "movieapp-e17fb",
    storageBucket: "movieapp-e17fb.appspot.com",
    messagingSenderId: "764534972817",
    appId: "1:764534972817:web:9b2b1ebb3d01227ff3ba30",
  };

  const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);