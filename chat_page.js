//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyD5D47fXoWKhkVvPlW9HWMz3jH-FcgRvbg",
    authDomain: "kwitter-1b59f.firebaseapp.com",
    databaseURL: "https://kwitter-1b59f-default-rtdb.firebaseio.com",
    projectId: "kwitter-1b59f",
    storageBucket: "kwitter-1b59f.appspot.com",
    messagingSenderId: "573747663179",
    appId: "1:573747663179:web:a5f3afb5ded90dc41098ce",
    measurementId: "G-MK5T9GEJQB"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("user_name"); 
 room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+"room_name").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send() 
{
msg = document.getElementById("msg").value;
firebase.database().ref("room_name").push({
 name:user_name,
  message:msg,
  like:0
});

document.getElementById("msg").value = "" ;


}