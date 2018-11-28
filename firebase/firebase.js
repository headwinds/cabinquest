import * as firebase from 'firebase';

const apiKey = "AIzaSyDV2Tp8e90qqoLnva_r_K4AH1Mu0r5WFb0";
const authDomain = "civil-campaign-91413.firebaseapp.com";
const databaseURL = "https://civil-campaign-91413.firebaseio.com";
const storageBucket = "civil-campaign-91413.appspot.com";

const prodConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseURL,
  //projectId: YOUR_PROJECT_ID,
  storageBucket: storageBucket,
  //messagingSenderId: YOUR_MESSAGING_SENDER_ID,
};

const devConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    databaseURL: databaseURL,
    //projectId: YOUR_PROJECT_ID,
    storageBucket: storageBucket,
    //messagingSenderId: YOUR_MESSAGING_SENDER_ID,
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
