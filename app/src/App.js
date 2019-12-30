import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import TimesList from './components/times-list'


//  => Was added earlier to just test we can connect to database
// import firebase from './firebase';

// firebase.firestore().collection('times').add({
//     title: 'Rubik\'s Cube',
//     time_seconds: 45
// });

function App() {
  return (
    <div className="App">
        <h1>Just Clock It</h1>
        <TimesList/>
    </div>
  );
}

export default App;
