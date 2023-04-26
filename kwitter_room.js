const firebaseConfig = {
    apiKey: "AIzaSyBLy-duiN2Im5a_4RVrprxj3LJkxyAVYqg",
    authDomain: "foods-e2812.firebaseapp.com",
    databaseURL: "https://foods-e2812-default-rtdb.firebaseio.com",
    projectId: "foods-e2812",
    storageBucket: "foods-e2812.appspot.com",
    messagingSenderId: "217126422137",
    appId: "1:217126422137:web:b4bd6a16ce9ce02ba9b6a8",
    measurementId: "G-ELPCCPY2HN"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
us_name=localStorage.getItem("User_Name");
document.getElementById("User_name").innerHTML="Welcome "+us_name+"!";

function addroom(){
      r_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(r_name).update({
            purpose:"adding user name"
      });

      localStorage.setItem("ROOM_NAME",r_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-"+Room_names);
room="<div class='room_name' id="+Room_names+" onclick='directto(this.id)'>#"+Room_names+" </div><hr>";
document.getElementById("output").innerHTML+=room;
      //End code
      });});}
getData();

function directto(name){
      console.log(name);
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html";
}
