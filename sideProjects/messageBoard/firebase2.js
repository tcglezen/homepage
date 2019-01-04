//This is an attempt to start again from scratch

const config = {
  apiKey: "AIzaSyDHsjQhhZApTOlN_0tC8-9D0AV7RfGZeu0",
  authDomain: "tglezen-9114.firebaseapp.com",
  databaseURL: "https://tglezen-9114.firebaseio.com",
  projectId: "tglezen-9114",
  storageBucket: "tglezen-9114.appspot.com",
  messagingSenderId: "113173176213"
};

firebase.initializeApp(config);

//############################################################
//General Notes/Ideas
//Constantly check for new messages/updating page
//write whenever we want
//   any changes in the messages due to changes will
//   appear because it will alter current messages



//Clears all of the messages in the board
function clearMessages() {

}

function displayMessages() {

//clear messages
//get the messages
//    Then print out the messages using the content

}


//Retrieves the messages from the database
function getMessages() {

  //tempLoc = firebase.database().ref('message/' + messageKeys[index]);

  //tempLoc.once('value', function(snapshot) {
  //  tempMessage = snapshot.val();
  //  messageList.push(tempMessage);
  //});

  /* Pseudo Code
    while possible
      message[i] = new element

    if there are no more, then we store all of our current ones


  */




}



//Displayes messages stored onto the board




//Removes the messages inside of the database
function deleteMessages() {
  firebase.database().ref('message').set(null);
}

//writes the current message to the database
function writeMessage() {
  var enteredName = document.getElementById("messageNameField")
  var enteredText = document.getElementById("messageTextField")

  var tempKey = firebase.database().ref('message').push({
    name: enteredName.value,
    text: enteredText.value
  }).key;
  messageKeys.push(tempKey);
  document.getElementById('messageNameField').value = '';
  document.getElementById('messageTextField').value = '';
}


function onLoad() {
  getMessages();

  //Then use the messages to display messages

}
