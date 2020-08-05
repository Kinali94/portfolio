import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyA1h8f4PlolvlT0s4uOECIcAgz_9fW_AKQ",
  authDomain: "portfolio-89bbe.firebaseapp.com",
  databaseURL: "https://portfolio-89bbe.firebaseio.com",
  projectId: "portfolio-89bbe",
  storageBucket: "portfolio-89bbe.appspot.com",
  messagingSenderId: "210879482275",
  appId: "1:210879482275:web:2eb62475da45cd7bb63216",
  measurementId: "G-DR00Q1DKXE"
  };
  const fire = firebase.initializeApp(config)

  export default fire

