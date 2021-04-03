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


///////////////////////////////////////////////////////////

//Purpose: clears messages in: data base and web document (webpage)
function clearMessages() {
  $('.messageList').remove();
}

function clearFunction() {
  firebase.database().ref('message').set(null);
  clearMessages();
}

/////////////////////////////////////////////////////////////////

//Purpose: writes the message to the data base
function writeFunction() {
  var enteredText = document.getElementById("messageTextField")

  firebase.database().ref('message').push({
    text: enteredText.value
  });

  document.getElementById('messageTextField').value = '';
}

//////////////////////////////////////////////////////////

//Purpose: provides the display of a single message
function singleDisplay(divNum, messy) {
  var d = document.createElement("div");
  d.className = 'messageList';
  d.id = "div" + String(divNum);

  var pText = document.createElement('P');
  pText.id = 'text';
  var hrTag = document.createElement('hr');

  pTextInner = document.createTextNode(messy.text);

  pText.appendChild(pTextInner);

  d.appendChild(pText);
  d.appendChild(hrTag);

  document.getElementById('messageList').appendChild(d);
}

////////////////////////////////////////////////////////////

//Purpose: Everytime it reads a set of messages, it
//displays all of the messages
function readFunction() {

  firebase.database().ref('message/').once('value').then(snapshot => {
      const messages = [];
      snapshot.forEach(child => {
          messages.push({
            key: child.val()
        });
      });

      clearMessages();

      for (index = 0; index < messages.length; index++) {
        singleDisplay(index, messages[index].key)
        }
    });
}

/////////////////////////////////////////////////////////

//Purpose: Calls readFunction everytime there is a change to the database
function updateDisplay(clickDisplay) {
  firebase.database().ref('message/').on('value', function(dataSnapshot) {
    readFunction();
  });
}
