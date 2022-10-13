const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyDa-wh_xOsdeg4VH9okHDi1QAqAAZrVQFQ",
  authDomain: "restaurantreview-lalinea.firebaseapp.com",
  projectId: "restaurantreview-lalinea",
  storageBucket: "restaurantreview-lalinea.appspot.com",
  messagingSenderId: "226763570842",
  appId: "1:226763570842:web:25fa497436cb41c8f22923",
  measurementId: "G-8H2HR16DYS",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default firebaseConfig;
