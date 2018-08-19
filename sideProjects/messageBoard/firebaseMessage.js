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

var messageKeys = [];
var tempMessage = {};
var messageList = [];
var messageCount = 0;
var displayCount = 0;

function clearMessages() {
  firebase.database().ref('message').set(null);
  //clearDisplay();
  messageKeys = [];
  messageCount = 0;
}

function superFunction() {
  clearDisplay();
  writeFunction();
  startLoad();
  //readFunction(messageCount);
  //displayAll(messageList);
}

/*
The purpose of the write functions is to
1.) Obtain the values from the text fields
2.) Obtain the keys needed for database (and add them to list)
*/


function writeFunction() {
  var enteredName = document.getElementById("messageNameField")
  var enteredText = document.getElementById("messageTextField")

  var tempKey = firebase.database().ref('message').push({
    name: enteredName.value,
    text: enteredText.value
  }).key;
  messageKeys.push(tempKey);
  document.getElementById('messageNameField').value = '';
  document.getElementById('messageTextField').value = '';
  //messageCount ++;
}

function clearDisplay() {
  for(i = 0; i < displayCount; i++) {
    document.getElementById('div' + String(i)).remove();
  }
}

//Pushes values via key list into personal list
function readFunction(index) {
  tempLoc = firebase.database().ref('message/'+messageKeys[index]);
  tempLoc.once('value', function (snapshot) {
    tempMessage = snapshot.val();
    messageList.push(tempMessage);
  });
}

function singleDisplay(divNum, messy) {
  var d = document.createElement("div");
  d.id = "div" + String(divNum);

  var pName = document.createElement('P');
  pName.id = 'name';
  var pText = document.createElement('P');
  pText.id = 'text';
  var hrTag = document.createElement('hr');

  pNameInner = document.createTextNode(messy.name);
  pTextInner = document.createTextNode(messy.text);

  pName.appendChild(pNameInner);
  pText.appendChild(pTextInner);

  d.appendChild(pName);
  d.appendChild(pText);
  d.appendChild(hrTag);

  document.getElementById('messageList').appendChild(d);
}

function displayAll(mList){
  for (i = 0; i < mList.length; i++) {
    singleDisplay(i, mList[i]);
  }
  displayCount = mList.length;
}

//.key() should get the key value, similar to .key
function startLoad() {

  messageKeys = [];
  messageList = [];
  messageCount = 0;

  var mainRef = firebase.database().ref('message')
  mainRef.once('value', (snapshot) => {
    snapshot.forEach((item) => {
      messageKeys.push(item.key);
    })
    messageKeys.forEach((key, i) => {
      readFunction(i);
    })
  })
/*  }).then(() => {
      messageCount = messageKeys.length;
      for (i = 0; i < messageCount; i++) {
        readFunction(i);
      }*/
    .then(() => {
      console.log(messageList);
      displayAll(messageList);
    });
}
