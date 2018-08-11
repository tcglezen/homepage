const firebase = require('firebase');

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

//.database() has a bunch of functions
//.ref() refers to a particular database (not sure exactly how that works)
//.set() is a modification? I believe it changes the entire data base to this
// there is probably an add function or something like that.
firebase.database().ref().set({
	countClick: 0
});


//firebase.database().ref('countClick').set(1);

/*
firebase.database().ref().on("countClick", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
*/
//HOW THE FUCK DO I READ VALUES
//console.log(firebase.database().ref('countClick').update());
//console.log(firebase.database().ref('countClick').on('countClick'));
//console.log('hello there');
