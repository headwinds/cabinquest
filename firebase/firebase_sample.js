import * as firebase from 'firebase';

const apiKey = "";
const authDomain = "";
const databaseURL = "";
const storageBucket = "";

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
