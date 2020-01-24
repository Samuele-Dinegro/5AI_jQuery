var button= document.createElement("button");
button.innerHTML="clicca";

var body=document.getElementsByTagName("body")[0];
body.append(button);

button.addEventListener("click",function(){
    document.getElementById("id1").innerHTML="ciao come stai";
})