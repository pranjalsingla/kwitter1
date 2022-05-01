const firebaseConfig = {
      apiKey: "AIzaSyABiIQ6_ZJZ9r_6D0OvYUep7IPP8SaCYMM",
      authDomain: "kwitter-bc3e9.firebaseapp.com",
      databaseURL: "https://kwitter-bc3e9-default-rtdb.firebaseio.com",
      projectId: "kwitter-bc3e9",
      storageBucket: "kwitter-bc3e9.appspot.com",
      messagingSenderId: "675680700072",
      appId: "1:675680700072:web:e463e26d395eec5cb9649d",
      measurementId: "G-WKD049141D"
    };
    
     firebase.initializeApp(firebaseConfig);
    
   user_name= localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

   function addRoom(){
         room_name= document.getElementById("room_name").value;
         firebase.database().ref("/").child(room_name).update({
               purpose:"adding room name"
         });
         localStorage.setItem("room_name", room_name);
         window.location="kwitter_page.html";
       
   }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(room_name);       

       row = "<div class='room_name' id="+Room_names+" onclick='trending_rooms(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML=row;
      });});}
      
getData();

function trending_rooms(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="last_page.html";
}

function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}
