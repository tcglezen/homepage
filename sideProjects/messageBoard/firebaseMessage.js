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

/*STEPS
0.) Display all of the information
1.) User inputs a bunch of stuff inside of the text box
2.) User presses a nearby button.

3.) The information inside of the textbox will be sent to firebase
4.) The text inside the textbox will be cleared

5.) Don't forget to display all of (new) the information
*/

/*What does each message look like?
Maybe make 2 fields
1.) "Name" (yes, they can fake it)
2.) The message itself
*/

function writeName(enteredName) {
  firebase.database().ref('message/name').push({
    name: enteredName
  });
}

function writeText(enteredText) {
  firebase.database().ref('message/text').push({
    text: enteredText
  });
}

//Maybe this should have an index for which message we would like to read
function readName() {

}

function readText() {

}

//Maybe delete all of the messages?
function clearMessages() {
  firebase.database().ref('message').set(null);
}
