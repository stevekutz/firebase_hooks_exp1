import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCFjht-NrXzQ4o2RGOGENq4BuKiLrZUcdg",
    authDomain: "just-clock-it-3addb.firebaseapp.com",
    databaseURL: "https://just-clock-it-3addb.firebaseio.com",
    projectId: "just-clock-it-3addb",
    storageBucket: "just-clock-it-3addb.appspot.com",
    messagingSenderId: "169215823139",
    appId: "1:169215823139:web:887074cd10cbd6369c1096"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;