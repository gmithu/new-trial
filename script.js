
let canvas=document.getElementById("cvns");
let cnx= canvas.getContext("2d");

let x=10;
let y=10;

function ani(){

    cnx.fillStyle="skyblue"
    cnx.fillRect(0,90,500,500);
    cnx.fillStyle="red";

    x+=10;
    y+=10;
    
    cnx.beginPath();
    cnx.fillStyle="orange";
    cnx.fillRect(x,y,20,10);
    cnx.fill(); 

    setTimeout(ani,1000)

}
btn .addEventListener("click",ani)