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

//function vs => (its kinda like var = var +1 and var +=1)
//function can refer to the global
//=> finds the this pointer to the parent scope
//(These are usually used in objects)

//Warning: There is conflict between using both set and transaction

function resetClick() {
  firebase.database().ref().set({
  	countClick: 0
  });
  return 0;
}

function updateClickDisplay(clickDisplay) {
  firebase.database().ref('countClick').once('value').then(function(snapshot) {
    clickDisplay.innerHTML = snapshot.val();
  });
}

//https://firebase.google.com/docs/reference/node/firebase.database.Reference#transaction
function incrClick() {
    firebase.database().ref('countClick').transaction(function(numClick) {
      return numClick + 1;
    });
}
