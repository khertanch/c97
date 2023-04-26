function adduser(){
    u_name=document.getElementById("user_name").value;
    localStorage.setItem("User_Name",u_name);
    window.location="kwitter_room.html";
}