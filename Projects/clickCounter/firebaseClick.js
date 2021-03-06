//const firebase = require('firebase');

  // Initialize Firebase
const config = {
  apiKey: "AIzaSyDHsjQhhZApTOlN_0tC8-9D0AV7RfGZeu0",
  authDomain: "tglezen-9114.firebaseapp.com",
  databaseURL: "https://tglezen-9114.firebaseio.com",
  projectId: "tglezen-9114",
  storageBucket: "tglezen-9114.appspot.com",
  messagingSenderId: "113173176213"
};

firebase.initializeApp(config);

//Other things that firebase can do is
/*
firebase.auth() - Authentication
firebase.storage() - Cloud Storage
fireabse.database() - realtime database
firebase.messaging() - cloud messaging
firebase.functions() - cloud functions
*/

function resetClick() {
  firebase.database().ref('click').set({
  	countClick: 0
  });
  return 0;
}

function updateClickDisplay(clickDisplay) {
  firebase.database().ref('click/countClick').on('value', function(dataSnapshot) {
    clickDisplay.innerHTML = dataSnapshot.val();
  });
}

//https://firebase.google.com/docs/reference/node/firebase.database.Reference#transaction
function incrClick() {
    firebase.database().ref('click/countClick').transaction(function(numClick) {
      return numClick + 1;
    });
}

function handleDisplay() {
  const clickDisplay = document.getElementById('countedClicks');
  incrClick();
  updateClickDisplay(clickDisplay);
}
